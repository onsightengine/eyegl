// TODO: fit in transform feedback

import { Vec3 } from '../math/Vec3.js';
import { calculateNormal, normalize } from '../math/functions/Vec3Func.js';

const _tempVec3 = new Vec3();

let _ID = 1;

class Geometry {

    constructor(attributes = {}) {
        this.isGeometry = true;

        if (! renderer) console.error(`Geometry.constructor: Renderer not found`);

        this.id = _ID++;
        this.attributes = {};

        this.VAOs = {}; /* store one VAO per program attribute locations order */
        this.drawRange = { start: 0, count: 0 };
        this.instancedCount = 0;
        this.glState = renderer.state; /* alias for renderer.state to avoid redundant calls for global state */

        // Create the buffers
        for (let key in attributes) {
            this.addAttribute(key, attributes[key]);
        }
    }

    /***** Attributes *****/

    // attribute params {
    //      data - typed array (e.g. UInt16Array for index, Float32Array for position, normal, uv)
    //      size - int, default 1 (e.g. index: 1, uv: 2, position, normal: 3)
    //      instanced - default null, pass divisor amount
    //      type - gl enum default gl.UNSIGNED_SHORT for 'index', gl.FLOAT for others
    //      normalized - boolean default false
    //
    //      buffer - gl buffer, if buffer exists, don't need to provide data - although needs position data for bounds calculation
    //      stride - default 0 - for when passing in buffer
    //      offset - default 0 - for when passing in buffer
    //      count - default null - for when passing in buffer
    //      min - array - for when passing in buffer
    //      max - array - for when passing in buffer
    // }

    addAttribute(key, attr) {
        if (! attr.data) return console.warn(`Geometry.addAttribute: Attribute '${key}' missing data`);

        // Unbind current VAO so that new buffers don't get added to active mesh
        renderer.clearActiveGeometry();

        // Adding attribute requires rebuilding vertex array object, clear existing if any
        this.clearVertexArrayObjects();

        // Add Attribute
        this.attributes[key] = attr;

        // Set options
        attr.size = attr.size || 1;
        if (! attr.type) {
            switch (attr.data.constructor) {
                case Float32Array: attr.type = renderer.gl.FLOAT; break;
                case Uint16Array: attr.type = renderer.gl.UNSIGNED_SHORT; break;
                case Uint32Array: default: attr.type = renderer.gl.UNSIGNED_INT;
            }
        }
        attr.target = (key === 'index') ? renderer.gl.ELEMENT_ARRAY_BUFFER : renderer.gl.ARRAY_BUFFER;
        attr.normalized = attr.normalized || false;
        attr.stride = attr.stride || 0;
        attr.offset = attr.offset || 0;
        attr.count = attr.count || ((attr.stride) ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
        attr.divisor = attr.instanced || 0;

        attr.needsUpdate = false;
        attr.usage = attr.usage || renderer.gl.STATIC_DRAW;

        // Push data to buffer
        if (! attr.buffer) this.updateAttribute(attr);

        // Update geometry counts - if indexed, ignore regular attributes
        if (attr.divisor) {
            this.isInstanced = true;
            if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
                console.warn('Geometry.addAttribute: Geometry has multiple instanced buffers of different length');
                return (this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor));
            }
            this.instancedCount = attr.count * attr.divisor;
        } else if (key === 'index') {
            this.drawRange.count = attr.count;
        } else if (! this.attributes.index) {
            this.drawRange.count = Math.max(this.drawRange.count, attr.count);
        }
    }

    updateAttribute(attr) {
        // New Buffer
        if (! attr.buffer) {
            attr.buffer = renderer.gl.createBuffer();
            renderer.gl.bindBuffer(attr.target, attr.buffer);
            renderer.gl.bufferData(attr.target, attr.data, attr.usage);
        // Existing Buffer
        } else {
            if (this.glState.boundBuffer !== attr.buffer) renderer.gl.bindBuffer(attr.target, attr.buffer);
            renderer.gl.bufferSubData(attr.target, 0, attr.data);
        }
        this.glState.boundBuffer = attr.buffer;
        attr.needsUpdate = false;
    }

    bindAttributes(program) {
        // Link all attributes to program using gl.vertexAttribPointer
        program.attributeLocations.forEach((location, { name, type }) => {
            // Missing a required shader attribute
            if (! this.attributes[name]) {
                console.warn(`Geometry.bindAttributes: Active attribute '${name}' not being supplied`);
                return;
            }

            const attr = this.attributes[name];
            renderer.gl.bindBuffer(attr.target, attr.buffer);
            this.glState.boundBuffer = attr.buffer;

            // For matrix attributes, buffer needs to be defined per column
            let numLoc = 1;
            if (type === 35674) numLoc = 2; // Mat2
            if (type === 35675) numLoc = 3; // Mat3
            if (type === 35676) numLoc = 4; // Mat4

            const size = attr.size / numLoc;
            const stride = numLoc === 1 ? 0 : numLoc * numLoc * numLoc;
            const offset = numLoc === 1 ? 0 : numLoc * numLoc;

            for (let i = 0; i < numLoc; i++) {
                renderer.gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
                renderer.gl.enableVertexAttribArray(location + i);

                // For instanced attributes, divisor needs to be set.
                // For firefox, need to set back to 0 if non-instanced drawn after instanced, else won't render.
                renderer.gl.vertexAttribDivisor(location + i, attr.divisor);
            }
        });

        // Bind indices if geometry indexed
        if (this.attributes.index) {
            renderer.gl.bindBuffer(renderer.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
        }
    }

    getPosition() {
        const positionAttribute = this.attributes.position;
        if (positionAttribute && positionAttribute.data) return positionAttribute;
        console.warn('Geometry.getPosition: No position attribute found');
        return null;
    }

    computeVertexNormals() {
        const positionAttribute = this.getPosition();
        if (! positionAttribute) return;

        const positions = positionAttribute.data;
        const normals = new Float32Array(positions.length);
        const countIndices = [];

        // Temp Vec3s
        const pA = new Vec3(), pB = new Vec3(), pC = new Vec3();
        const nA = new Vec3(), nB = new Vec3(), nC = new Vec3();
        const cb = new Vec3();

        // Adds an index to the index counter
        function addIndexCounts(indexArray) {
            for (let i = 0; i < indexArray.length; i++) {
                let index = indexArray[i];
                if (! countIndices[index]) countIndices[index] = 0;
                countIndices[index]++;
            }
        }

        // Indexed, need to add normals
        if (this.attributes.index) {
            const indices = this.attributes.index.data;
            const indexHashes = [];

            // Calculate normals for each triangle
            for (let i = 0; i < indices.length; i += 3) {
                let idx0 = indices[i + 0];
                let idx1 = indices[i + 1];
                let idx2 = indices[i + 2];

                idx0 *= 3;
                idx1 *= 3;
                idx2 *= 3;
                pA.fromArray(positions, idx0);
                pB.fromArray(positions, idx1);
                pC.fromArray(positions, idx2);
                calculateNormal(cb, pA, pB, pC);

                addIndexCounts([ idx0, idx1, idx2 ]);

                nA.fromArray(normals, idx0).add(cb);
                nB.fromArray(normals, idx1).add(cb);
                nC.fromArray(normals, idx2).add(cb);

                normals.set(nA, idx0);
                normals.set(nB, idx1);
                normals.set(nC, idx2);
            }

            // Divide normals by index counts
            for (let i = 0; i < normals.length; i += 3) {
                nA.fromArray(normals, i);
                let index = i / 3;
                let count = countIndices[index];
                if (!!count) {
                    nA.divide(count);
                    normals.set(nA, i);
                }
            }

        // Non indexed, normal for each position
        } else {
            // Calculate normals for each triangle
            for (let i = 0; i < positions.length; i += 9) {
                pA.fromArray(positions, i + 0);
                pB.fromArray(positions, i + 3);
                pC.fromArray(positions, i + 6);
                calculateNormal(cb, pA, pB, pC);
                for (let j = 0; j < 3; j++) {
                    normals[i + (j * 3) + 0] = cb[0];
                    normals[i + (j * 3) + 1] = cb[1];
                    normals[i + (j * 3) + 2] = cb[2];
                }
            }
        }

        // Update attribute
        if (this.attributes.normal) {
            this.attributes.normal.data = normals;
            this.attributes.normal.needsUpdate = true;
        // Add attribute
        } else {
            this.addAttribute('normal', { size: 3, data: normals });
        }
    }

    /***** Draw *****/

    setDrawRange(start, count) {
        this.drawRange.start = start;
        this.drawRange.count = count;
    }

    setInstancedCount(value) {
        this.instancedCount = value;
    }

    draw({ program, mode = renderer.gl.TRIANGLES }) {
        // Make sure current geometry attributes are bound
        if (renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
            // Need to create vertex array object, bind attribute buffers
            if (! this.VAOs[program.attributeOrder]) {
                this.VAOs[program.attributeOrder] = renderer.gl.createVertexArray();
                renderer.gl.bindVertexArray(this.VAOs[program.attributeOrder]);
                this.bindAttributes(program);
            // Rebind existing vertex array object
            } else {
                renderer.gl.bindVertexArray(this.VAOs[program.attributeOrder]);
            }
            renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
        }

        // Check if index needs updating
        if (this.attributes.index && this.attributes.index.needsUpdate) {
            this.updateAttribute(this.attributes.index);
        }

        // Check if program bound attributes need updating
        program.attributeLocations.forEach((location, { name }) => {
            const attr = this.attributes[name];
            if (attr && attr.needsUpdate) this.updateAttribute(attr);
        });

        if (this.isInstanced) {
            if (this.attributes.index) {
                renderer.gl.drawElementsInstanced(
                    mode,
                    this.drawRange.count,
                    this.attributes.index.type,
                    this.attributes.index.offset + this.drawRange.start * 2,
                    this.instancedCount,
                );
            } else {
                renderer.gl.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
            }
        } else {
            if (this.attributes.index) {
                renderer.gl.drawElements(mode, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * 2);
            } else {
                renderer.gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
            }
        }
    }

    /***** Bounding Box *****/

    computeBoundingBox(attr) {
        if (! attr) attr = this.getPosition();
        if (! attr) return;
        const array = attr.data;
        const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;

        if (! this.bounds) {
            this.bounds = {
                min: new Vec3(),
                max: new Vec3(),
                center: new Vec3(),
                scale: new Vec3(),
                radius: Infinity,
            };
        }

        const min = this.bounds.min;
        const max = this.bounds.max;
        const center = this.bounds.center;
        const scale = this.bounds.scale;

        min.set(+Infinity);
        max.set(-Infinity);

        // TODO: check size of position (e.g. triangle with Vec2)
        for (let i = 0, l = array.length; i < l; i += stride) {
            const x = array[i];
            const y = array[i + 1];
            const z = array[i + 2];

            min.x = Math.min(x, min.x);
            min.y = Math.min(y, min.y);
            min.z = Math.min(z, min.z);

            max.x = Math.max(x, max.x);
            max.y = Math.max(y, max.y);
            max.z = Math.max(z, max.z);
        }

        scale.sub(max, min);
        center.add(min, max).divide(2);
    }

    computeBoundingSphere(attr) {
        if (! attr) attr = this.getPosition();
        if (! attr) return;
        const array = attr.data;
        const stride = attr.stride ? attr.stride / array.BYTES_PER_ELEMENT : attr.size;

        if (! this.bounds) this.computeBoundingBox(attr);

        let maxRadiusSq = 0;
        for (let i = 0, l = array.length; i < l; i += stride) {
            _tempVec3.fromArray(array, i);
            maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(_tempVec3));
        }

        this.bounds.radius = Math.sqrt(maxRadiusSq);
    }

    /***** Cleanup *****/

    clearVertexArrayObjects() {
        for (let key in this.VAOs) {
            renderer.gl.deleteVertexArray(this.VAOs[key]);
            delete this.VAOs[key];
        }
    }

    remove() {
        this.clearVertexArrayObjects();
        for (let key in this.attributes) {
            renderer.gl.deleteBuffer(this.attributes[key].buffer);
            delete this.attributes[key];
        }
    }

}

export { Geometry };
