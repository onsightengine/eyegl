/**
 * @description EyeGL
 * @about       Fast WebGL 2 graphics library built for games.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2021-2023 Stephens Nunnally and Scidian Studios
 * @source      https://github.com/onsightengine/eyegl
 */
const EPSILON$5 = 0.000001;

/**
 * Calculates the length of a Vec3
 *
 * @param {Vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length$3(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Copy the values from one Vec3 to another
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the source vector
 * @returns {Vec3} out
 */
function copy$5(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}

/**
 * Set the components of a Vec3 to the given values
 *
 * @param {Vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {Vec3} out
 */
function set$5(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}

/**
 * Adds two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function add$5(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function subtract$3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}

/**
 * Multiplies two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function multiply$4(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}

/**
 * Divides two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function divide$1(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}

/**
 * Scales a Vec3 by a scalar number
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {Vec3} out
 */
function scale$5(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}

/**
 * Calculates the euclidian distance between two Vec3's
 *
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance$1(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two Vec3's
 *
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance$1(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a Vec3
 *
 * @param {Vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength$1(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return x * x + y * y + z * z;
}

/**
 * Negates the components of a Vec3
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a vector to negate
 * @returns {Vec3} out
 */
function negate$1(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}

/**
 * Returns the inverse of the components of a Vec3
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a vector to invert
 * @returns {Vec3} out
 */
function inverse$1(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}

/**
 * Normalize a Vec3
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a vector to normalize
 * @returns {Vec3} out
 */
function normalize$3(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let len = x * x + y * y + z * z;
    if (len > 0) {
        // TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
}

/**
 * Calculates the dot product of two Vec3's
 *
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot$3(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function cross$1(out, a, b) {
    let ax = a[0], ay = a[1], az = a[2];
    let bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}

/**
 * Performs a linear interpolation between two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Vec3} out
 */
function lerp$3(out, a, b, t) {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}

/**
 * Transforms the Vec3 with a Mat4
 * 4th vector component is implicitly '1'
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {Mat4} m matrix to transform with
 * @returns {Vec3} out
 */
function transformMat4$1(out, a, m) {
    let x = a[0],
        y = a[1],
        z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}

/**
 * Same as above but doesn't apply translation
 * Useful for rays
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {Mat4} m matrix to transform with
 * @returns {Vec3} out
 */
function scaleRotateMat4(out, a, m) {
    let x = a[0],
        y = a[1],
        z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
    return out;
}

/**
 * Transforms the Vec3 with a Mat3
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {Mat3} m the 3x3 matrix to transform with
 * @returns {Vec3} out
 */
function transformMat3$1(out, a, m) {
    let x = a[0],
        y = a[1],
        z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}

/**
 * Transforms the Vec3 with a Quat
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {Quat} q quaternion to transform with
 * @returns {Vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    let x = a[0],
        y = a[1],
        z = a[2];
    let qx = q[0],
        qy = q[1],
        qz = q[2],
        qw = q[3];

    let uvx = qy * z - qz * y;
    let uvy = qz * x - qx * z;
    let uvz = qx * y - qy * x;

    let uuvx = qy * uvz - qz * uvy;
    let uuvy = qz * uvx - qx * uvz;
    let uuvz = qx * uvy - qy * uvx;

    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;

    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;

    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}

/**
 * Get the angle between two 3D vectors
 *
 * @param {Vec3} a The first operand
 * @param {Vec3} b The second operand
 * @returns {Number} The angle in radians
 */
const angle = (function() {
    const tempA = [ 0, 0, 0 ];
    const tempB = [ 0, 0, 0 ];

    return function(a, b) {
        copy$5(tempA, a);
        copy$5(tempB, b);

        normalize$3(tempA, tempA);
        normalize$3(tempB, tempB);

        let cosine = dot$3(tempA, tempB);

        if (cosine > 1.0) {
            return 0;
        } else if (cosine < -1.0) {
            return Math.PI;
        } else {
            return Math.acos(cosine);
        }
    };
})();

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {Vec3} a The first vector
 * @param {Vec3} b The second vector
 * @returns {Boolean} True if the vectors are equal, false otherwise
 */
function exactEquals$1(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether the vectors have approximately the same values
 *
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Number} tolerance
 * @returns {Boolean} True is vectors are equal +/- tolerance
 */
function fuzzyEquals(a, b, tolerance = 0.001) {
    if (fuzzyFloat$1(a[0], b[0], tolerance) === false) return false;
    if (fuzzyFloat$1(a[1], b[1], tolerance) === false) return false;
    if (fuzzyFloat$1(a[2], b[2], tolerance) === false) return false;
    return true;
}

/**
 * Calculates the normal of a triangle
 *
 * @param {Vec3} out Vector which will store the normal
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Vec3} c
 */
const calculateNormal = (function() {
    const temp = [ 0, 0, 0 ];

    return function(out, a, b, c) {
        subtract$3(temp, a, b);
        subtract$3(out, b, c);
        cross$1(out, temp, out);
        normalize$3(out, out);
    };
})();

/***** Internal *****/

/**
 * Compares two decimal numbers to see if they're almost the same
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} tolerance
 * @returns {Boolean}
 */
function fuzzyFloat$1(a, b, tolerance = 0.001) {
    return ((a < (b + tolerance)) && (a > (b - tolerance)));
}

var Vec3Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    length: length$3,
    copy: copy$5,
    set: set$5,
    add: add$5,
    subtract: subtract$3,
    multiply: multiply$4,
    divide: divide$1,
    scale: scale$5,
    distance: distance$1,
    squaredDistance: squaredDistance$1,
    squaredLength: squaredLength$1,
    negate: negate$1,
    inverse: inverse$1,
    normalize: normalize$3,
    dot: dot$3,
    cross: cross$1,
    lerp: lerp$3,
    transformMat4: transformMat4$1,
    scaleRotateMat4: scaleRotateMat4,
    transformMat3: transformMat3$1,
    transformQuat: transformQuat,
    angle: angle,
    exactEquals: exactEquals$1,
    fuzzyEquals: fuzzyEquals,
    calculateNormal: calculateNormal
});

class Vec3 extends Array {

    constructor(x = 0, y = x, z = x) {
        super(x, y, z);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set z(v) {
        this[2] = v;
    }

    set(x, y = x, z = x) {
        if (x.length) return this.copy(x);
        set$5(this, x, y, z);
        return this;
    }

    copy(v) {
        copy$5(this, v);
        return this;
    }

    add(va, vb) {
        if (vb) add$5(this, va, vb);
        else add$5(this, this, va);
        return this;
    }

    sub(va, vb) {
        if (vb) subtract$3(this, va, vb);
        else subtract$3(this, this, va);
        return this;
    }

    multiply(v) {
        if (v.length) multiply$4(this, this, v);
        else scale$5(this, this, v);
        return this;
    }

    divide(v) {
        if (v.length) divide$1(this, this, v);
        else scale$5(this, this, 1 / v);
        return this;
    }

    inverse(v = this) {
        inverse$1(this, v);
        return this;
    }

    // Can't use 'length' as Array.prototype uses it
    len() {
        return length$3(this);
    }

    distance(v) {
        if (v) return distance$1(this, v);
        else return length$3(this);
    }

    squaredLen() {
        return squaredLength$1(this);
    }

    squaredDistance(v) {
        if (v) return squaredDistance$1(this, v);
        else return squaredLength$1(this);
    }

    negate(v = this) {
        negate$1(this, v);
        return this;
    }

    cross(va, vb) {
        if (vb) cross$1(this, va, vb);
        else cross$1(this, this, va);
        return this;
    }

    scale(multiplier) {
        scale$5(this, this, multiplier);
        return this;
    }

    normalize() {
        normalize$3(this, this);
        return this;
    }

    dot(v) {
        return dot$3(this, v);
    }

    equals(v) {
        return exactEquals$1(this, v);
    }

    fuzzyEquals(v, tolerance) {
        return fuzzyEquals(this, v, tolerance);
    }

    applyMatrix3(mat3) {
        transformMat3$1(this, this, mat3);
        return this;
    }

    applyMatrix4(mat4) {
        transformMat4$1(this, this, mat4);
        return this;
    }

    scaleRotateMatrix4(mat4) {
        scaleRotateMat4(this, this, mat4);
        return this;
    }

    applyQuaternion(q) {
        transformQuat(this, this, q);
        return this;
    }

    angle(v) {
        return angle(this, v);
    }

    lerp(v, t) {
        lerp$3(this, this, v, t);
        return this;
    }

    clone() {
        return new Vec3(this[0], this[1], this[2]);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }

    transformDirection(mat4) {
        const x = this[0];
        const y = this[1];
        const z = this[2];

        this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
        this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
        this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;

        return this.normalize();
    }

    log(description = '') {
        if (description !== '') description += ' - ';
        console.log(`${description}X: ${this.x}, Y: ${this.y}, Z: ${this.z}`);
    }

}

// TODO: fit in transform feedback

const _tempVec3$1 = new Vec3();

let _ID$4 = 1;

class Geometry {

    constructor(attributes = {}) {
        this.isGeometry = true;

        if (! renderer) console.error(`Geometry.constructor: Renderer not found`);

        this.id = _ID$4++;
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
        if (! attr) return console.warn(`Geometry.addAttribute: Attribute for '${key}' missing`);
        if (! attr.data) return console.warn(`Geometry.addAttribute: Attribute '${key}' missing data`);

        // Unbind current VAO so that new buffers don't get added to active mesh
        renderer.clearActiveGeometry();

        // Adding attribute requires rebuilding vertex array object, clear existing if any
        this.clearVertexArrayObjects();

        // Add Attribute
        this.attributes[key] = attr;

        // Set options
        attr.key = key;
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

    deleteAttribute(attr) {
        if (this.attributes[attr.key]) {
            renderer.gl.deleteBuffer(attr.buffer);
            delete this.attributes[attr.key];
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
            _tempVec3$1.fromArray(array, i);
            maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(_tempVec3$1));
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
            this.deleteAttribute(this.attributes[key]);
        }
    }

}

// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube

const arrayCacheF32 = {};   // cache of typed arrays used to flatten uniform arrays

let _ID$3 = 1;

class Program {

    constructor({
        vertex,
        fragment,
        uniforms = {},
        defines = {},

        transparent = false,
        cullFace = renderer.gl.BACK, // FRONT, BACK, FRONT_AND_BACK
        frontFace = renderer.gl.CCW,
        depthTest = true,
        depthWrite = true,
        depthFunc = renderer.gl.LESS,
    } = {}) {
        this.isProgram = true;

        if (! renderer) console.error(`Program.constructor: Renderer not found`);
        if (! vertex) console.warn('Program.constructor: Vertex shader not supplied');
        if (! fragment) console.warn('Program.constructor: Fragment shader not supplied');

        this.id = _ID$3++;
        this.uniforms = uniforms;

        // Store program state
        this.transparent = transparent;
        this.cullFace = cullFace;
        this.frontFace = frontFace;
        this.depthTest = depthTest;
        this.depthWrite = depthWrite;
        this.depthFunc = depthFunc;
        this.blendFunc = {};
        this.blendEquation = {};

        // Set default blendFunc if transparent flagged
        if (this.transparent && ! this.blendFunc.src) {
            if (renderer.premultipliedAlpha) this.setBlendFunc(renderer.gl.ONE, renderer.gl.ONE_MINUS_SRC_ALPHA);
            else this.setBlendFunc(renderer.gl.SRC_ALPHA, renderer.gl.ONE_MINUS_SRC_ALPHA);
        }

        // Compile shaders, build program
        this.buildProgram({ vertex, fragment, defines });
    }

    buildProgram({ vertex, fragment, defines } = {}) {
        // Add defines to shaders
        const customDefines = generateDefines(defines);

        let prefixVertex = [
			customDefines
		].filter(filterEmptyLine).join('\n');
        if (prefixVertex.length > 0) prefixVertex += '\n';

		let prefixFragment = [
			customDefines
		].filter(filterEmptyLine).join('\n');
		if (prefixFragment.length > 0) prefixFragment += '\n';

        let vertexGlsl, fragmentGlsl;
        if (vertex.includes('#version 300 es')) {
            vertexGlsl = '#version 300 es\n' + prefixVertex + vertex.replace('#version 300 es', '');
        } else vertexGlsl = prefixVertex + vertex;
        if (fragment.includes('#version 300 es')) {
            fragmentGlsl = '#version 300 es\n' + prefixFragment + fragment.replace('#version 300 es', '');
        } else fragmentGlsl = prefixFragment + fragment;

        // Compile vertex shader and log errors
        const vertexShader = renderer.gl.createShader(renderer.gl.VERTEX_SHADER);
        renderer.gl.shaderSource(vertexShader, vertexGlsl);
        renderer.gl.compileShader(vertexShader);
        if (renderer.gl.getShaderInfoLog(vertexShader) !== '') {
            console.warn(`${renderer.gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
        }

        // Compile fragment shader and log errors
        const fragmentShader = renderer.gl.createShader(renderer.gl.FRAGMENT_SHADER);
        renderer.gl.shaderSource(fragmentShader, fragmentGlsl);
        renderer.gl.compileShader(fragmentShader);
        if (renderer.gl.getShaderInfoLog(fragmentShader) !== '') {
            console.warn(`${renderer.gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
        }

        // Check if was built before, if so delete
        if (this.program) {
            renderer.gl.deleteProgram(this.program);
            renderer.state.currentProgram = -1; // force gl program update 'this.use()'
        }

        // Compile program and log errors
        this.program = renderer.gl.createProgram();
        renderer.gl.attachShader(this.program, vertexShader);
        renderer.gl.attachShader(this.program, fragmentShader);
        renderer.gl.linkProgram(this.program);
        if (! renderer.gl.getProgramParameter(this.program, renderer.gl.LINK_STATUS)) {
            return console.warn(renderer.gl.getProgramInfoLog(this.program));
        }

        // Remove shader once linked
        renderer.gl.deleteShader(vertexShader);
        renderer.gl.deleteShader(fragmentShader);

        // Get active uniform locations
        this.uniformLocations = new Map();
        let numUniforms = renderer.gl.getProgramParameter(this.program, renderer.gl.ACTIVE_UNIFORMS);
        for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
            let uniform = renderer.gl.getActiveUniform(this.program, uIndex);
            this.uniformLocations.set(uniform, renderer.gl.getUniformLocation(this.program, uniform.name));

            // split uniforms' names to separate array and struct declarations
            const split = uniform.name.match(/(\w+)/g);

            uniform.uniformName = split[0];

            if (split.length === 3) {
                uniform.isStructArray = true;
                uniform.structIndex = Number(split[1]);
                uniform.structProperty = split[2];
            } else if (split.length === 2 && isNaN(Number(split[1]))) {
                uniform.isStruct = true;
                uniform.structProperty = split[1];
            }
        }

        // Get active attribute locations
        this.attributeLocations = new Map();
        const locations = [];
        const numAttribs = renderer.gl.getProgramParameter(this.program, renderer.gl.ACTIVE_ATTRIBUTES);
        for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
            const attribute = renderer.gl.getActiveAttrib(this.program, aIndex);
            const location = renderer.gl.getAttribLocation(this.program, attribute.name);
            if (location === -1) continue; // Ignore special built-in inputs. eg gl_VertexID, gl_InstanceID
            locations[location] = attribute.name;
            this.attributeLocations.set(attribute, location);
        }
        this.attributeOrder = locations.join('');
    }

    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        this.blendFunc.src = src;
        this.blendFunc.dst = dst;
        this.blendFunc.srcAlpha = srcAlpha;
        this.blendFunc.dstAlpha = dstAlpha;
        if (src) this.transparent = true;
    }

    setBlendEquation(modeRGB, modeAlpha) {
        this.blendEquation.modeRGB = modeRGB;
        this.blendEquation.modeAlpha = modeAlpha;
    }

    applyState() {
        if (this.depthTest) renderer.enable(renderer.gl.DEPTH_TEST);
        else renderer.disable(renderer.gl.DEPTH_TEST);

        if (this.cullFace) renderer.enable(renderer.gl.CULL_FACE);
        else renderer.disable(renderer.gl.CULL_FACE);

        if (this.blendFunc.src) renderer.enable(renderer.gl.BLEND);
        else renderer.disable(renderer.gl.BLEND);

        if (this.cullFace) renderer.setCullFace(this.cullFace);
        renderer.setFrontFace(this.frontFace);
        renderer.setDepthMask(this.depthWrite);
        renderer.setDepthFunc(this.depthFunc);
        if (this.blendFunc.src)
            renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
        renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
    }

    use({ flipFaces = false } = {}) {
        let textureUnit = -1;
        const programActive = renderer.state.currentProgram === this.id;

        // Avoid gl call if program already in use
        if (! programActive) {
            renderer.gl.useProgram(this.program);
            renderer.state.currentProgram = this.id;
        }

        // Set only the active uniforms found in the shader
        this.uniformLocations.forEach((location, activeUniform) => {
            let name = activeUniform.uniformName;

            // Get supplied uniform
            let uniform = this.uniforms[name];

            // For structs, get the specific property instead of the entire object
            if (activeUniform.isStruct) {
                uniform = uniform[activeUniform.structProperty];
                name += `.${activeUniform.structProperty}`;
            }
            if (activeUniform.isStructArray) {
                uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
                name += `[${activeUniform.structIndex}].${activeUniform.structProperty}`;
            }

            if (! uniform) {
                return warn(`Active uniform ${name} has not been supplied`);
            }

            if (uniform && uniform.value === undefined) {
                return warn(`${name} uniform is missing a value parameter`);
            }

            if (uniform.value.texture) {
                textureUnit = textureUnit + 1;

                // Check if texture needs to be updated
                uniform.value.update(textureUnit);
                return setUniform(renderer.gl, activeUniform.type, location, textureUnit);
            }

            // For texture arrays, set uniform as an array of texture units instead of just one
            if (uniform.value.length && uniform.value[0].texture) {
                const textureUnits = [];
                uniform.value.forEach((value) => {
                    textureUnit = textureUnit + 1;
                    value.update(textureUnit);
                    textureUnits.push(textureUnit);
                });

                return setUniform(renderer.gl, activeUniform.type, location, textureUnits);
            }

            setUniform(renderer.gl, activeUniform.type, location, uniform.value);
        });

        this.applyState();
        if (flipFaces) renderer.setFrontFace(this.frontFace === renderer.gl.CCW ? renderer.gl.CW : renderer.gl.CCW);
    }

    remove() {
        renderer.gl.deleteProgram(this.program);
        this.program = undefined;
    }

}

/***** Internal *****/

function setUniform(gl, type, location, value) {
    value = value.length ? flatten(value) : value;
    const setValue = renderer.state.uniformLocations.get(location);

    // Avoid redundant uniform commands
    if (value.length) {
        if (setValue === undefined || setValue.length !== value.length) {
            // Clone array to store as cache
            renderer.state.uniformLocations.set(location, value.slice(0));
        } else {
            if (arraysEqual(setValue, value)) return;

            // Update cached array values
            setValue.set ? setValue.set(value) : setArray(setValue, value);
            renderer.state.uniformLocations.set(location, setValue);
        }
    } else {
        if (setValue === value) return;
        renderer.state.uniformLocations.set(location, value);
    }

    switch (type) {
        case 5126:
            return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value); // FLOAT
        case 35664:
            return gl.uniform2fv(location, value); // FLOAT_VEC2
        case 35665:
            return gl.uniform3fv(location, value); // FLOAT_VEC3
        case 35666:
            return gl.uniform4fv(location, value); // FLOAT_VEC4
        case 35670: // BOOL
        case 5124: // INT
        case 35678: // SAMPLER_2D
        case 35680:
            return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value); // SAMPLER_CUBE
        case 35671: // BOOL_VEC2
        case 35667:
            return gl.uniform2iv(location, value); // INT_VEC2
        case 35672: // BOOL_VEC3
        case 35668:
            return gl.uniform3iv(location, value); // INT_VEC3
        case 35673: // BOOL_VEC4
        case 35669:
            return gl.uniform4iv(location, value); // INT_VEC4
        case 35674:
            return gl.uniformMatrix2fv(location, false, value); // FLOAT_MAT2
        case 35675:
            return gl.uniformMatrix3fv(location, false, value); // FLOAT_MAT3
        case 35676:
            return gl.uniformMatrix4fv(location, false, value); // FLOAT_MAT4
    }
}

function addLineNumbers(string) {
    let lines = string.split('\n');
    for (let i = 0; i < lines.length; i++) {
        lines[i] = i + 1 + ': ' + lines[i];
    }
    return lines.join('\n');
}

function flatten(a) {
    const arrayLen = a.length;
    const valueLen = a[0].length;
    if (valueLen === undefined) return a;
    const length = arrayLen * valueLen;
    let value = arrayCacheF32[length];
    if (!value) arrayCacheF32[length] = value = new Float32Array(length);
    for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
    return value;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0, l = a.length; i < l; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function setArray(a, b) {
    for (let i = 0, l = a.length; i < l; i++) {
        a[i] = b[i];
    }
}

let warnCount = 0;
function warn(message) {
    if (warnCount > 100) return;
    console.warn(message);
    warnCount++;
    if (warnCount > 100) console.warn('Program: More than 100 program warnings - stopping logs');
}

/**
 * Generates a string list of defines from an object ({ FLAT_SHADING: true, etc. });
 * @param {Object} defines
 * @returns {String}
 */
function generateDefines(defines) {
	const chunks = [];
	for (const name in defines) {
		const value = defines[name];
		if (value === false) continue;
		chunks.push('#define ' + name + ' ' + value);
	}
	return chunks.join('\n');
}

function filterEmptyLine(string) {
	return string !== '';
}

const NAMES = {
    black: '#000000',
    gray: '#808080',
    grey: '#808080',
    white: '#ffffff',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    fuchsia: '#ff00ff',
    pink: '#ff00ff',
    purple: '#8000ff',
    cyan: '#00ffff',
    yellow: '#ffff00',
    orange: '#ff8000',
};

/**
 * Converts hex string to Color
 *
 * @param {String} hex
 * @returns {Color}
 */
function hexToRGB(hex) {
    if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (! rgb) console.warn(`ColorFunc.hexToRGB: Unable to convert hex string ${hex} to rgb values`);
    return [ parseInt(rgb[1], 16) / 255, parseInt(rgb[2], 16) / 255, parseInt(rgb[3], 16) / 255 ];
}

/**
 * Converts integer to Color
 *
 * @param {Number} num
 * @returns {Color}
 */
function numberToRGB(num) {
    num = parseInt(num);
    return [ ((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255 ];
}

/**
 * Attempts to convert input ('color') to a Color object
 *
 * @param {any} color
 * @returns {Color}
 */
function parseColor(color) {
    // Empty ()
    if (color === undefined) return [ 0, 0, 0 ];

    // RGB (1.0, 0.0, 0.0) or (255, 0, 0);
    if (arguments.length === 3) {
        if (arguments[0] > 1 || arguments[1] > 1 || arguments[2] > 1) {
            arguments[0] /= 255;
            arguments[1] /= 255;
            arguments[2] /= 255;
        }
        return [...arguments];
    }

    // Number (16711680)
    if (! isNaN(color)) return numberToRGB(color);

    // Hex String (#ff0000)
    if (color[0] === '#') return hexToRGB(color);

    // Names ('red')
    if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);

    // Unknown
    console.warn(`ColorFunc.parseColor: Format not recognized, color: ${color}`);
    return [ 0, 0, 0 ];
}

var ColorFunc$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hexToRGB: hexToRGB,
    numberToRGB: numberToRGB,
    parseColor: parseColor
});

// - Color stored as an array of RGB decimal values (between 0 > 1)
// - Constructor / set method accept following formats:
// new Color()                 Empty (defaults to black)
// new Color([0.2, 0.4, 1.0])  Decimal Array (or another Color instance)
// new Color(0.7, 0.0, 0.1)    Decimal RGB values
// new Color('#ff0000')        Hex string
// new Color('#ccc')           Short-hand Hex string
// new Color(0x4f27e8)         Number
// new Color('red')            Color name string (short list in ColorFunc.js)

class Color extends Array {

    constructor(color) {
        if (Array.isArray(color)) return super(...color);
        return super(...parseColor(...arguments));
    }

    get r() {
        return this[0];
    }

    get g() {
        return this[1];
    }

    get b() {
        return this[2];
    }

    set r(v) {
        this[0] = v;
    }

    set g(v) {
        this[1] = v;
    }

    set b(v) {
        this[2] = v;
    }

    set(color) {
        if (Array.isArray(color)) return this.copy(color);
        return this.copy(parseColor(...arguments));
    }

    copy(v) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        return this;
    }

}

class Capabilities {

    /**
     * @param {WebGL2RenderingContext} gl
     * @param {*} extensions
     */
    constructor(gl, extensions) {

        // Shaders
        this.maxAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
        this.maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
        this.maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
	    this.maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);

	    this.maxPrecision = 'lowp';
		if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision > 0 &&
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0
        ) this.maxPrecision = 'highp';
        else if (
            gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision > 0 &&
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision > 0
        ) this.maxPrecision = 'mediump';

        // Textures
        this.maxFragmentTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        this.maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
        this.maxTextures = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        this.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
        this.maxCubemapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);

        this.maxAnisotropy = 0;
        if (extensions.has('EXT_texture_filter_anisotropic')) {
            const extension = extensions.get('EXT_texture_filter_anisotropic');
			this.maxAnisotropy = gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        }

        // Renderer
        this.maxSamples = gl.getParameter(gl.MAX_SAMPLES);

        // Framebuffers
        this.drawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);

        // Render Target Types
        this.byteTargets = checkRenderTargetSupport(gl, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE);
        this.floatTargets = checkRenderTargetSupport(gl, gl.RGBA32F, gl.RGBA, gl.FLOAT);
        this.halfFloatTargets = checkRenderTargetSupport(gl, gl.RGBA16F, gl.RGBA, gl.HALF_FLOAT);

        // Console Logger
        this.log = function() {
            console.group('WebGL 2 Capabilites');
            console.groupCollapsed('Shaders');
            console.log(`Max Shader Precision: ${this.maxPrecision}`);
            console.log(`Max Vertex Attributes: ${this.maxAttributes}`);
            console.log(`Max Varying Vectors: ${this.maxVaryings}`);
            console.log(`Max Vertex Uniform Vectors: ${this.maxVertexUniforms}`);
            console.log(`Max Fragment Uniform Vectors: ${this.maxFragmentUniforms}`);
            console.groupEnd();
            console.groupCollapsed('Textures');
            console.log(`Max Fragment Textures: ${this.maxFragmentTextures}`);
            console.log(`Max Vertex Textures: ${this.maxVertexTextures}`);
            console.log(`Max Combined Textures: ${this.maxTextures}`);
            console.log(`Max 2D Texture Size: ${this.maxTextureSize}`);
            console.log(`Max Cube Texture Size: ${this.maxCubemapSize}`);
            console.log(`Max Texture Anisotropy: ${this.maxAnisotropy}`);
            console.groupEnd();
            console.groupCollapsed('Renderer');
            console.log(`Point Size Range: ${gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[0]} - ${gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1]}`);
            console.log(`Line Width Range: ${gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[0]} - ${gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[1]}`);
            console.log(`Max Viewport Dimensions: ${gl.getParameter(gl.MAX_VIEWPORT_DIMS)[0]} - ${gl.getParameter(gl.MAX_VIEWPORT_DIMS)[1]}`);
            console.log(`Max Renderbuffer Size: ${gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)}`);
            console.log(`Max Fragment Shader Multiple Render Targets: ${this.drawBuffers}`);
            console.log(`Max MSAA Samples: ${this.maxSamples}`);
            console.groupEnd();
            console.groupCollapsed('Framebuffer');
            console.log(`Framebuffer Red Bits: ${gl.getParameter(gl.RED_BITS)}`);
            console.log(`Framebuffer Green Bits: ${gl.getParameter(gl.GREEN_BITS)}`);
            console.log(`Framebuffer Blue Bits: ${gl.getParameter(gl.BLUE_BITS)}`);
            console.log(`Framebuffer Alpha Bits: ${gl.getParameter(gl.ALPHA_BITS)}`);
            console.log(`Framebuffer Depth Bits: ${gl.getParameter(gl.DEPTH_BITS)}`);
            console.log(`Framebuffer Stencil Bits: ${gl.getParameter(gl.STENCIL_BITS)}`);
            console.log(`Framebuffer Subpixel Bits: ${gl.getParameter(gl.SUBPIXEL_BITS)}`);
            console.groupEnd();
            console.groupCollapsed('Framebuffer Types');
            console.log(`Support for Unsigned Byte Render Targets: ${this.byteTargets}`);
            console.log(`Support for Float Render Targets: ${this.floatTargets}`);
            console.log(`Support for Half Float Render Targets: ${this.halfFloatTargets}`);
            console.groupEnd();
            console.groupCollapsed('Supported Extensions');
            console.log(gl.getSupportedExtensions().join('\n'));
            console.groupEnd();
            console.groupCollapsed('WebGL');
            console.log(`WebGL Renderer: ${gl.getParameter(gl.RENDERER)}`);
            console.log(`WebGL Vendor: ${gl.getParameter(gl.VENDOR)}`);
            console.log(`WebGL Version: ${gl.getParameter(gl.VERSION)}`);
            console.log(`Shading Language: ${gl.getParameter(gl.SHADING_LANGUAGE_VERSION)}`);
            if (extensions.has('WEBGL_debug_renderer_info')) {
                console.log(`Unmasked Renderer: ${gl.getParameter(extensions.get('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL)}`);
                console.log(`Unmasked Vendor: ${gl.getParameter(extensions.get('WEBGL_debug_renderer_info').UNMASKED_VENDOR_WEBGL)}`);
            }
            console.groupEnd();
            console.groupEnd();
        };
    }

}

/***** Internal *****/

function checkRenderTargetSupport(gl, internalFormat, format, type) {
	// Create temp frame buffer and texture
	const framebuffer = gl.createFramebuffer();
	const texture = gl.createTexture();

	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 2, 2, 0, format, type, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

	// Check frame buffer status
	const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

	// Clean up
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	gl.bindTexture(gl.TEXTURE_2D, null);
	return (status === gl.FRAMEBUFFER_COMPLETE);
};

class Extensions {

    constructor(gl) {
        const extensions = {};

        // Fetch extension
        function getExtension(name) {
            if (! extensions[name]) extensions[name] = gl.getExtension(name);
            return extensions[name];
        }

        // Initialize extra format types
        getExtension('EXT_color_buffer_float');
        getExtension('EXT_color_buffer_half_float' );
        getExtension('EXT_texture_compression_bptc');
        getExtension('OES_texture_float_linear');
        getExtension('WEBGL_compressed_texture_astc');
        getExtension('WEBGL_compressed_texture_etc1');
        getExtension('WEBGL_compressed_texture_s3tc');
        getExtension('WEBGL_compressed_texture_pvrtc');
        getExtension('WEBGL_multisampled_render_to_texture');

        // Public extension checker
        this.has = function(name) {
			return (getExtension(name) !== null);
		};

        // Public extension getter
        this.get = function(name) {
			const extension = getExtension(name);
			if (extension === null) console.warn(`Extensions: ${name} extension not supported.`);
			return extension;
		};
    }

}

// TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost

const tempVec3 = new Vec3();

let _ID$2 = 1;

class Renderer {

    constructor({
        depth = true,                       // drawing buffer has depth buffer (at least 16 bits)?
        stencil = false,                    // drawing buffer has stencil buffer (at least 8 bits)?
        antialias = false,                  // perform anti-aliasing if possible?
        powerPreference = 'default',        // 'default', 'low-power', 'high-performance'
        premultipliedAlpha = false,         // drawing buffer contains colors with pre-multiplied alpha
        preserveDrawingBuffer = false,      // true is slower, mostly not needed

        webgl = 2,                                  // request webgl 1 or 2?
        canvas = document.createElement('canvas'),  // canvas to use
        dpr = 1,                                    // window.devicePixelRatio
        clearColor = new Color(),                   // color to clear COLOR_BUFFER_BIT
        clearAlpha = 0,                             // alpha to clear COLOR_BUFFER_BIT
    } = {}) {
        this.isRenderer = true;

        // Properties
        this.id = _ID$2++;
        this.dpr = dpr;

        this.color = true;
        this.depth = depth;
        this.stencil = stencil;
        this.premultipliedAlpha = premultipliedAlpha;
        this.clearColor = (clearColor && clearColor instanceof Color) ? clearColor : new Color(clearColor);
        this.clearAlpha = clearAlpha;

        // Active Geometry
        this.currentGeometry = null;

        // Private
        this._contextLost = false;

        // WebGL attributes
        const attributes = {
            // NOTE: About 'alpha', here we force canvas to have alpha buffer for performance reasons
            // If using destination blending (such as with weighted, blended order independent transparency), will need
            // to set alpha channel to 1.0 to avoid color errors.
            // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#avoid_alphafalse_which_can_be_expensive
            alpha: true,
            depth,
            stencil,
            antialias,
            failIfMajorPerformanceCaveat: true,
            powerPreference,
            premultipliedAlpha,
            preserveDrawingBuffer,
        };

        /** @type {WebGL2RenderingContext} */
        let gl;

        // WebGL2 Context
        if (webgl === 2) gl = canvas.getContext('webgl2', attributes);
        if (! gl) console.error('Renderer.constructor: Unable to create WebGL 2 context');
        this.gl = gl;

        // GLOBAL: So all classes have access to internal state functions
        window.renderer = this;

        // WebGL state stores to avoid redundant calls on methods used internally
        this.state = {};
        this.state.blendFunc = { src: gl.ONE, dst: gl.ZERO };
        this.state.blendEquation = { modeRGB: gl.FUNC_ADD };
        this.state.cullFace = null;
        this.state.frontFace = gl.CCW;
        this.state.depthMask = true;
        this.state.depthFunc = gl.LESS;
        this.state.premultiplyAlpha = false;
        this.state.flipY = false;
        this.state.unpackAlignment = 4;
        this.state.framebuffer = null;
        this.state.viewport = { x: 0, y: 0, width: null, height: null };
        this.state.textureUnits = [];
        this.state.activeTextureUnit = 0;
        this.state.boundBuffer = null;
        this.state.uniformLocations = new Map();
        this.state.currentProgram = null;

        function initContext(self) {

            self.extensions = new Extensions(gl);
            self.capabilities = new Capabilities(gl, self.extensions);

            // // DEBUG: Log WebGL 2 capabilities, max values
            // self.capabilities.log();

        };
        initContext(this);

        // Context lost
        self.loseContext = this.getExtension('WEBGL_lose_context');
        gl.canvas.addEventListener('webglcontextlost', function(event) {
            event.preventDefault();
            console.log('Renderer: Context lost');
            this._contextLost = true;
        }.bind(this));

        gl.canvas.addEventListener('webglcontextrestored', function(event) {
            console.log('Renderer: Context restored');
            initContext(this);
            this._contextLost = false;
        }.bind(this));
    }

    getExtension(extension) {
        return this.extensions.get(extension);
    }

    // Usually (window.innerWidth, window.innerHeight)
    setSize(width, height, updateStyle = true) {
        this.width = width;
        this.height = height;

        if (this.gl.canvas.width !== width || this.gl.canvas.height !== height) {
            this.gl.canvas.width = width * this.dpr;
            this.gl.canvas.height = height * this.dpr;

            if (updateStyle) {
                this.gl.canvas.style.width = width + 'px';
                this.gl.canvas.style.height = height + 'px';
            }
        }
    }

    setViewport(width, height, x = 0, y = 0) {
        if (this.state.viewport.width === width && this.state.viewport.height === height) return;
        this.state.viewport.width = width;
        this.state.viewport.height = height;
        this.state.viewport.x = x;
        this.state.viewport.y = y;
        this.gl.viewport(x, y, width, height);
    }

    setScissor(width, height, x = 0, y = 0) {
        this.gl.scissor(x, y, width, height);
    }

    enable(id) {
        if (this.state[id] === true) return;
        this.gl.enable(id);
        this.state[id] = true;
    }

    disable(id) {
        if (this.state[id] === false) return;
        this.gl.disable(id);
        this.state[id] = false;
    }

    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        if (
            this.state.blendFunc.src === src &&
            this.state.blendFunc.dst === dst &&
            this.state.blendFunc.srcAlpha === srcAlpha &&
            this.state.blendFunc.dstAlpha === dstAlpha
        ) return;
        this.state.blendFunc.src = src;
        this.state.blendFunc.dst = dst;
        this.state.blendFunc.srcAlpha = srcAlpha;
        this.state.blendFunc.dstAlpha = dstAlpha;
        if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
        else this.gl.blendFunc(src, dst);
    }

    setBlendEquation(modeRGB, modeAlpha) {
        modeRGB = modeRGB || this.gl.FUNC_ADD;
        if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
        this.state.blendEquation.modeRGB = modeRGB;
        this.state.blendEquation.modeAlpha = modeAlpha;
        if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);
        else this.gl.blendEquation(modeRGB);
    }

    setCullFace(value) {
        if (this.state.cullFace === value) return;
        this.state.cullFace = value;
        this.gl.cullFace(value);
    }

    setFrontFace(value) {
        if (this.state.frontFace === value) return;
        this.state.frontFace = value;
        this.gl.frontFace(value);
    }

    setDepthMask(value) {
        if (this.state.depthMask === value) return;
        this.state.depthMask = value;
        this.gl.depthMask(value);
    }

    setDepthFunc(value) {
        if (this.state.depthFunc === value) return;
        this.state.depthFunc = value;
        this.gl.depthFunc(value);
    }

    activeTexture(value) {
        if (this.state.activeTextureUnit === value) return;
        this.state.activeTextureUnit = value;
        this.gl.activeTexture(this.gl.TEXTURE0 + value);
    }

    bindFramebuffer({ target = this.gl.FRAMEBUFFER, buffer = null } = {}) {
        if (this.state.framebuffer === buffer) return;
        this.state.framebuffer = buffer;
        this.gl.bindFramebuffer(target, buffer);
    }

    clearActiveGeometry() {
        this.gl.bindVertexArray(null);
        this.currentGeometry = null;
    }

    sortOpaque(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
            return a.program.id - b.program.id;
        } else if (a.zDepth !== b.zDepth) {
            return a.zDepth - b.zDepth;
        } else {
            return b.id - a.id;
        }
    }

    sortTransparent(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        }
        if (a.zDepth !== b.zDepth) {
            return b.zDepth - a.zDepth;
        } else {
            return b.id - a.id;
        }
    }

    sortUI(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
            return a.program.id - b.program.id;
        } else {
            return b.id - a.id;
        }
    }

    getRenderList({ scene, camera, frustumCull, sort }) {
        if (camera && frustumCull) camera.updateFrustum();

        // Get visible objects
        let renderList = [];
        scene.traverse((node) => {
            if (! node.visible) return true; /* stop traversing children (all children become invisible) */
            if (! node.draw) return;
            if (frustumCull && node.frustumCulled && camera && ! camera.frustumIntersectsMesh(node)) return;
            renderList.push(node);
        });

        // Sort? (sorting opaque objects is still desired to stop overdraw)
        if (sort) {
            const opaque = [];
            const transparent = [];     // depthTest true
            const ui = [];              // depthTest false

            renderList.forEach((node) => {
                // Split into the 3 render groups
                if (! node.program.transparent) {
                    opaque.push(node);
                } else if (node.program.depthTest) {
                    transparent.push(node);
                } else {
                    ui.push(node);
                }

                node.zDepth = 0;

                // Only calculate z-depth if renderOrder unset and depthTest is true
                if (node.renderOrder !== 0 || ! node.program.depthTest || ! camera) return;

                // Update z-depth
                node.worldMatrix.getTranslation(tempVec3);
                tempVec3.applyMatrix4(camera.projectionViewMatrix);
                node.zDepth = tempVec3.z;
            });

            opaque.sort(this.sortOpaque);
            transparent.sort(this.sortTransparent);
            ui.sort(this.sortUI);

            renderList = opaque.concat(transparent, ui);
        }

        return renderList;
    }

    render({
        scene,
        camera,
        target = null,
        update = true,
        sort = true,
        frustumCull = true,
        clear = true,
    } = {}) {
        if (this._contextLost) return;

        // Framebuffer
        if (target === null) {
            // Bind html canvas
            this.bindFramebuffer();
            this.setViewport(this.width * this.dpr, this.height * this.dpr);
        } else {
            // Bind render target
            this.bindFramebuffer(target);
            this.setViewport(target.width, target.height);
        }

        // Perform clear
        if (clear) {
            // Ensure depth buffer writing is enabled so it can be cleared
            if (this.depth && (! target || target.depth)) {
                this.enable(this.gl.DEPTH_TEST);
                this.setDepthMask(true);
            }
            const clearColor = (this.color) ? this.gl.COLOR_BUFFER_BIT : 0;
            const clearDepth = (this.depth) ? this.gl.DEPTH_BUFFER_BIT : 0;
            const clearStencil = (this.stencil) ? this.gl.STENCIL_BUFFER_BIT : 0;
            this.gl.clearColor(this.clearColor.r, this.clearColor.g, this.clearColor.b, this.clearAlpha);
            this.gl.clear(clearColor | clearDepth | clearStencil);
        }

        // Update all scene graph matrices
        if (update) scene.updateMatrixWorld();

        // Update camera separately (in case not in scene graph)
        if (camera) camera.updateMatrixWorld();

        // Get render list (entails culling and sorting)
        const renderList = this.getRenderList({ scene, camera, frustumCull, sort });

        // Render objects
        renderList.forEach((node) => {
            node.draw({ camera });
        });
    }

}

const EPSILON$4 = 0.000001;

/**
 * Copy the values from one Vec4 to another
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a the source vector
 * @returns {Vec4} out
 */
function copy$4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}

/**
 * Set the components of a Vec4 to the given values
 *
 * @param {Vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {Vec4} out
 */
function set$4(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}

/**
 * Adds two Vec4's
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a the first operand
 * @param {Vec4} b the second operand
 * @returns {Vec4} out
 */
function add$4(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}

/**
 * Scales a Vec4 by a scalar number
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {Vec4} out
 */
function scale$4(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}

/**
 * Calculates the length of a Vec4
 *
 * @param {Vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length$2(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Normalize a Vec4
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a vector to normalize
 * @returns {Vec4} out
 */
function normalize$2(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
    }
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
}

/**
 * Calculates the dot product of two Vec4's
 *
 * @param {Vec4} a the first operand
 * @param {Vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot$2(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two Vec4's
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a the first operand
 * @param {Vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Vec4} out
 */
function lerp$2(out, a, b, t) {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    let aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}

var Vec4Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    copy: copy$4,
    set: set$4,
    add: add$4,
    scale: scale$4,
    length: length$2,
    normalize: normalize$2,
    dot: dot$2,
    lerp: lerp$2
});

/**
 * Set a Quat to the identity quaternion
 *
 * @param {Quat} out the receiving quaternion
 * @returns {Quat} out
 */
function identity$2(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}

/**
 * Sets a Quat from the given angle and rotation axis, then returns it.
 *
 * @param {Quat} out the receiving quaternion
 * @param {Vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {Quat} out
 **/
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    let s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}

/**
 * Multiplies two Quats
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @returns {Quat} out
 */
function multiply$3(out, a, b) {
    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {Quat} out Quat receiving operation result
 * @param {Quat} a Quat to rotate
 * @param {Number} rad angle (in radians) to rotate
 * @returns {Quat} out
 */
function rotateX(out, a, rad) {
    rad *= 0.5;

    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bx = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {Quat} out Quat receiving operation result
 * @param {Quat} a Quat to rotate
 * @param {Number} rad angle (in radians) to rotate
 * @returns {Quat} out
 */
function rotateY(out, a, rad) {
    rad *= 0.5;

    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let by = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {Quat} out Quat receiving operation result
 * @param {Quat} a Quat to rotate
 * @param {Number} rad angle (in radians) to rotate
 * @returns {Quat} out
 */
function rotateZ(out, a, rad) {
    rad *= 0.5;

    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bz = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}

/**
 * Performs a spherical linear interpolation between two Quat
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Quat} out
 */
function slerp(out, a, b, t) {
    // benchmarks: http://jsperf.com/quaternion-slerp-implementations
    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    let omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    }
    // calculate coefficients
    if (1.0 - cosom > 0.000001) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;

    return out;
}

/**
 * Calculates the inverse of a Quat
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a Quat to calculate inverse of
 * @returns {Quat} out
 */
function invert$2(out, a) {
    let a0 = a[0],
        a1 = a[1],
        a2 = a[2],
        a3 = a[3];
    let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    let invDot = dot ? 1.0 / dot : 0;

    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}

/**
 * Calculates the conjugate of a Quat.
 * If the quaternion is normalized, this function is faster than Quat.inverse and produces the same result.
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a Quat to calculate conjugate of
 * @returns {Quat} out
 */
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {Quat} out the receiving quaternion
 * @param {Mat3} m rotation matrix
 * @returns {Quat} out
 * @function
 */
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    let fTrace = m[0] + m[4] + m[8];
    let fRoot;

    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    } else {
        // |w| <= 1/2
        let i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        let j = (i + 1) % 3;
        let k = (i + 2) % 3;

        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }

    return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z
 *
 * @param {Quat} out the receiving quaternion
 * @param {Vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {Quat} out
 * @function
 */
function fromEuler(out, euler, order = 'YXZ') {
    let sx = Math.sin(euler[0] * 0.5);
    let cx = Math.cos(euler[0] * 0.5);
    let sy = Math.sin(euler[1] * 0.5);
    let cy = Math.cos(euler[1] * 0.5);
    let sz = Math.sin(euler[2] * 0.5);
    let cz = Math.cos(euler[2] * 0.5);

    if (order === 'XYZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'YXZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === 'ZXY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'ZYX') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === 'YZX') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'XZY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    }

    return out;
}

/**
 * Copy the values from one Quat to another
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the source quaternion
 * @returns {Quat} out
 * @function
 */
const copy$3 = copy$4;

/**
 * Set the components of a Quat to the given values
 *
 * @param {Quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {Quat} out
 * @function
 */
const set$3 = set$4;

/**
 * Adds two Quat's
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @returns {Quat} out
 * @function
 */
const add$3 = add$4;

/**
 * Scales a Quat by a scalar Number
 *
 * @param {Quat} out the receiving vector
 * @param {Quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {Quat} out
 * @function
 */
const scale$3 = scale$4;

/**
 * Calculates the dot product of two Quat's
 *
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot$1 = dot$2;

/**
 * Performs a linear interpolation between two Quat's
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Quat} out
 * @function
 */
const lerp$1 = lerp$2;

/**
 * Calculates the length of a Quat
 *
 * @param {Quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length$1 = length$2;

/**
 * Normalize a Quat
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a quaternion to normalize
 * @returns {Quat} out
 * @function
 */
const normalize$1 = normalize$2;

var QuatFunc$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    identity: identity$2,
    setAxisAngle: setAxisAngle,
    multiply: multiply$3,
    rotateX: rotateX,
    rotateY: rotateY,
    rotateZ: rotateZ,
    slerp: slerp,
    invert: invert$2,
    conjugate: conjugate,
    fromMat3: fromMat3,
    fromEuler: fromEuler,
    copy: copy$3,
    set: set$3,
    add: add$3,
    scale: scale$3,
    dot: dot$1,
    lerp: lerp$1,
    length: length$1,
    normalize: normalize$1
});

class Quat extends Array {

    constructor(x = 0, y = 0, z = 0, w = 1) {
        super(x, y, z, w);
        this.onChange = () => {};
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    get w() {
        return this[3];
    }

    set x(v) {
        this[0] = v;
        this.onChange();
    }

    set y(v) {
        this[1] = v;
        this.onChange();
    }

    set z(v) {
        this[2] = v;
        this.onChange();
    }

    set w(v) {
        this[3] = v;
        this.onChange();
    }

    identity() {
        identity$2(this);
        this.onChange();
        return this;
    }

    set(x, y, z, w) {
        if (x.length) return this.copy(x);
        set$3(this, x, y, z, w);
        this.onChange();
        return this;
    }

    rotateX(a) {
        rotateX(this, this, a);
        this.onChange();
        return this;
    }

    rotateY(a) {
        rotateY(this, this, a);
        this.onChange();
        return this;
    }

    rotateZ(a) {
        rotateZ(this, this, a);
        this.onChange();
        return this;
    }

    inverse(q = this) {
        invert$2(this, q);
        this.onChange();
        return this;
    }

    conjugate(q = this) {
        conjugate(this, q);
        this.onChange();
        return this;
    }

    copy(q) {
        copy$3(this, q);
        this.onChange();
        return this;
    }

    normalize(q = this) {
        normalize$1(this, q);
        this.onChange();
        return this;
    }

    multiply(qA, qB) {
        if (qB) {
            multiply$3(this, qA, qB);
        } else {
            multiply$3(this, this, qA);
        }
        this.onChange();
        return this;
    }

    dot(v) {
        return dot$1(this, v);
    }

    fromMatrix3(matrix3) {
        fromMat3(this, matrix3);
        this.onChange();
        return this;
    }

    fromEuler(euler) {
        fromEuler(this, euler, euler.order);
        return this;
    }

    fromAxisAngle(axis, a) {
        setAxisAngle(this, axis, a);
        this.onChange();
        return this;
    }

    slerp(q, t) {
        slerp(this, this, q, t);
        this.onChange();
        return this;
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        this.onChange();
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        return a;
    }

}

const EPSILON$3 = 0.000001;

/**
 * Copy the values from one Mat4 to another
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the source matrix
 * @returns {Mat4} out
 */
function copy$2(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

/**
 * Set the components of a Mat4 to the given values
 *
 * @param {Mat4} out the receiving matrix
 * @returns {Mat4} out
 */
function set$2(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}

/**
 * Set a Mat4 to the identity matrix
 *
 * @param {Mat4} out the receiving matrix
 * @returns {Mat4} out
 */
function identity$1(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Transpose the values of a Mat4
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the source matrix
 * @returns {Mat4} out
 */
function transpose$1(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        let a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a12 = a[6],
            a13 = a[7];
        let a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }

    return out;
}

/**
 * Inverts a Mat4
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the source matrix
 * @returns {Mat4} out
 */
function invert$1(out, a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
}

/**
 * Calculates the determinant of a Mat4
 *
 * @param {Mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant$1(a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two Mat4s
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the first operand
 * @param {Mat4} b the second operand
 * @returns {Mat4} out
 */
function multiply$2(out, a, b) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    // Cache only the current line of the second matrix
    let b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}

/**
 * Translate a Mat4 by the given vector
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the matrix to translate
 * @param {Vec3} v vector to translate by
 * @returns {Mat4} out
 */
function translate$1(out, a, v) {
    let x = v[0],
        y = v[1],
        z = v[2];
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];

        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
}

/**
 * Scales the Mat4 by the dimensions in the given Vec3 not using vectorization
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the matrix to scale
 * @param {Vec3} v the Vec3 to scale the matrix by
 * @returns {Mat4} out
 **/
function scale$2(out, a, v) {
    let x = v[0],
        y = v[1],
        z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

/**
 * Rotates a Mat4 by the given angle around the given axis
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {Vec3} axis the axis to rotate around
 * @returns {Mat4} out
 */
function rotate$1(out, a, rad, axis) {
    let x = axis[0],
        y = axis[1],
        z = axis[2];
    let len = Math.hypot(x, y, z);
    let s, c, t;
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;
    let b00, b01, b02;
    let b10, b11, b12;
    let b20, b21, b22;

    if (Math.abs(len) < EPSILON$3) {
        return null;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param {Vec3} out Vector to receive translation component
 * @param {Mat4} mat Matrix to be decomposed (input)
 * @return {Vec3} out
 */
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];

    return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param {Vec3} out Vector to receive scaling factor component
 * @param {Mat4} mat Matrix to be decomposed (input)
 * @return {Vec3} out
 */
function getScaling(out, mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];

    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);

    return out;
}

function getMaxScaleOnAxis(mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];

    const x = m11 * m11 + m12 * m12 + m13 * m13;
    const y = m21 * m21 + m22 * m22 + m23 * m23;
    const z = m31 * m31 + m32 * m32 + m33 * m33;

    return Math.sqrt(Math.max(x, y, z));
}

/**
 * Returns a quaternion representing the rotational component of a transformation matrix.
 * If a matrix is built with fromRotationTranslation, the returned quaternion will be the
 * same as the quaternion originally supplied.
 *
 * @param {Quat} out Quaternion to receive the rotation component
 * @param {Mat4} mat Matrix to be decomposed (input)
 * @return {Quat} out
 */
const getRotation = (function() {
    const temp = [ 0, 0, 0 ];

    return function(out, mat) {
        let scaling = temp;
        getScaling(scaling, mat);

        let is1 = 1 / scaling[0];
        let is2 = 1 / scaling[1];
        let is3 = 1 / scaling[2];

        let sm11 = mat[0] * is1;
        let sm12 = mat[1] * is2;
        let sm13 = mat[2] * is3;
        let sm21 = mat[4] * is1;
        let sm22 = mat[5] * is2;
        let sm23 = mat[6] * is3;
        let sm31 = mat[8] * is1;
        let sm32 = mat[9] * is2;
        let sm33 = mat[10] * is3;

        let trace = sm11 + sm22 + sm33;
        let S = 0;

        if (trace > 0) {
            S = Math.sqrt(trace + 1.0) * 2;
            out[3] = 0.25 * S;
            out[0] = (sm23 - sm32) / S;
            out[1] = (sm31 - sm13) / S;
            out[2] = (sm12 - sm21) / S;
        } else if (sm11 > sm22 && sm11 > sm33) {
            S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
            out[3] = (sm23 - sm32) / S;
            out[0] = 0.25 * S;
            out[1] = (sm12 + sm21) / S;
            out[2] = (sm31 + sm13) / S;
        } else if (sm22 > sm33) {
            S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
            out[3] = (sm31 - sm13) / S;
            out[0] = (sm12 + sm21) / S;
            out[1] = 0.25 * S;
            out[2] = (sm23 + sm32) / S;
        } else {
            S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
            out[3] = (sm12 - sm21) / S;
            out[0] = (sm31 + sm13) / S;
            out[1] = (sm23 + sm32) / S;
            out[2] = 0.25 * S;
        }

        return out;
    };
})();

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     Mat4.identity(dest);
 *     Mat4.translate(dest, vec);
 *     let quatMat = Mat4.create();
 *     Quat.toMat4(Quat, quatMat);
 *     Mat4.multiply(dest, quatMat);
 *     Mat4.scale(dest, scale)
 *
 * @param {Mat4} out Mat4 receiving operation result
 * @param {Quat} q Rotation quaternion
 * @param {Vec3} v Translation vector
 * @param {Vec3} s Scaling vector
 * @returns {Mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    let x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;

    let xx = x * x2;
    let xy = x * y2;
    let xz = x * z2;
    let yy = y * y2;
    let yz = y * z2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    let sx = s[0];
    let sy = s[1];
    let sz = s[2];

    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;

    return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {Mat4} out Mat4 receiving operation result
 * @param {Quat} q Quaternion to create matrix from
 * @returns {Mat4} out
 */
function fromQuat$1(out, q) {
    let x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;

    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {Mat4} out Mat4 frustum matrix will be written into
 * @param {Number} fovy Vertical field of view in radians
 * @param {Number} aspect Aspect ratio. typically viewport width/height
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {Mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    let f = 1.0 / Math.tan(fovy / 2);
    let nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {Mat4} out Mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {Mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    let lr = 1 / (left - right);
    let bt = 1 / (bottom - top);
    let nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {Mat4} out Mat4 frustum matrix will be written into
 * @param {Vec3} eye Position of the viewer
 * @param {Vec3} target Point the viewer is looking at
 * @param {Vec3} up Vec3 pointing up
 * @returns {Mat4} out
 */
function targetTo(out, eye, target, up) {
    let eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2];

    let z0 = eyex - target[0],
        z1 = eyey - target[1],
        z2 = eyez - target[2];

    let len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len === 0) {
        // eye and target are in the same position
        z2 = 1;
    } else {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }

    let x0 = upy * z2 - upz * z1,
        x1 = upz * z0 - upx * z2,
        x2 = upx * z1 - upy * z0;

    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len === 0) {
        // up and z are parallel
        if (upz) {
            upx += 1e-6;
        } else if (upy) {
            upz += 1e-6;
        } else {
            upy += 1e-6;
        }
        (x0 = upy * z2 - upz * z1), (x1 = upz * z0 - upx * z2), (x2 = upx * z1 - upy * z0);

        len = x0 * x0 + x1 * x1 + x2 * x2;
    }

    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;

    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}

/**
 * Adds two Mat4's
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the first operand
 * @param {Mat4} b the second operand
 * @returns {Mat4} out
 */
function add$2(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the first operand
 * @param {Mat4} b the second operand
 * @returns {Mat4} out
 */
function subtract$2(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {Mat4} out
 */
function multiplyScalar$1(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}

var Mat4Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    copy: copy$2,
    set: set$2,
    identity: identity$1,
    transpose: transpose$1,
    invert: invert$1,
    determinant: determinant$1,
    multiply: multiply$2,
    translate: translate$1,
    scale: scale$2,
    rotate: rotate$1,
    getTranslation: getTranslation,
    getScaling: getScaling,
    getMaxScaleOnAxis: getMaxScaleOnAxis,
    getRotation: getRotation,
    fromRotationTranslationScale: fromRotationTranslationScale,
    fromQuat: fromQuat$1,
    perspective: perspective,
    ortho: ortho,
    targetTo: targetTo,
    add: add$2,
    subtract: subtract$2,
    multiplyScalar: multiplyScalar$1
});

class Mat4 extends Array {

    constructor(
        m00 = 1,
        m01 = 0,
        m02 = 0,
        m03 = 0,
        m10 = 0,
        m11 = 1,
        m12 = 0,
        m13 = 0,
        m20 = 0,
        m21 = 0,
        m22 = 1,
        m23 = 0,
        m30 = 0,
        m31 = 0,
        m32 = 0,
        m33 = 1
    ) {
        super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }

    get x() {
        return this[12];
    }

    get y() {
        return this[13];
    }

    get z() {
        return this[14];
    }

    get w() {
        return this[15];
    }

    set x(v) {
        this[12] = v;
    }

    set y(v) {
        this[13] = v;
    }

    set z(v) {
        this[14] = v;
    }

    set w(v) {
        this[15] = v;
    }

    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        if (m00.length) return this.copy(m00);
        set$2(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }

    translate(v, m = this) {
        translate$1(this, m, v);
        return this;
    }

    rotate(v, axis, m = this) {
        rotate$1(this, m, v, axis);
        return this;
    }

    scale(v, m = this) {
        scale$2(this, m, typeof v === 'number' ? [v, v, v] : v);
        return this;
    }

    multiply(ma, mb) {
        if (mb) {
            multiply$2(this, ma, mb);
        } else {
            multiply$2(this, this, ma);
        }
        return this;
    }

    identity() {
        identity$1(this);
        return this;
    }

    copy(m) {
        copy$2(this, m);
        return this;
    }

    fromPerspective({ fov, aspect, near, far } = {}) {
        perspective(this, fov, aspect, near, far);
        return this;
    }

    fromOrthogonal({ left, right, bottom, top, near, far }) {
        ortho(this, left, right, bottom, top, near, far);
        return this;
    }

    fromQuaternion(q) {
        fromQuat$1(this, q);
        return this;
    }

    setPosition(v) {
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
        return this;
    }

    inverse(m = this) {
        invert$1(this, m);
        return this;
    }

    compose(q, pos, scale) {
        fromRotationTranslationScale(this, q, pos, scale);
        return this;
    }

    getRotation(q) {
        getRotation(q, this);
        return this;
    }

    getTranslation(pos) {
        getTranslation(pos, this);
        return this;
    }

    getScaling(scale) {
        getScaling(scale, this);
        return this;
    }

    getMaxScaleOnAxis() {
        return getMaxScaleOnAxis(this);
    }

    lookAt(eye, target, up) {
        targetTo(this, eye, target, up);
        return this;
    }

    determinant() {
        return determinant$1(this);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        this[4] = a[o + 4];
        this[5] = a[o + 5];
        this[6] = a[o + 6];
        this[7] = a[o + 7];
        this[8] = a[o + 8];
        this[9] = a[o + 9];
        this[10] = a[o + 10];
        this[11] = a[o + 11];
        this[12] = a[o + 12];
        this[13] = a[o + 13];
        this[14] = a[o + 14];
        this[15] = a[o + 15];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        a[o + 4] = this[4];
        a[o + 5] = this[5];
        a[o + 6] = this[6];
        a[o + 7] = this[7];
        a[o + 8] = this[8];
        a[o + 9] = this[9];
        a[o + 10] = this[10];
        a[o + 11] = this[11];
        a[o + 12] = this[12];
        a[o + 13] = this[13];
        a[o + 14] = this[14];
        a[o + 15] = this[15];
        return a;
    }

}

/**
 * Assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
 *
 * @param {Euler} out
 * @param {Mat4} m
 * @param {String} order
 * @returns
 */
function fromRotationMatrix(out, m, order = 'YXZ') {
    if (order === 'XYZ') {
        out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
        if (Math.abs(m[8]) < 0.99999) {
            out[0] = Math.atan2(-m[9], m[10]);
            out[2] = Math.atan2(-m[4], m[0]);
        } else {
            out[0] = Math.atan2(m[6], m[5]);
            out[2] = 0;
        }
    } else if (order === 'YXZ') {
        out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
        if (Math.abs(m[9]) < 0.99999) {
            out[1] = Math.atan2(m[8], m[10]);
            out[2] = Math.atan2(m[1], m[5]);
        } else {
            out[1] = Math.atan2(-m[2], m[0]);
            out[2] = 0;
        }
    } else if (order === 'ZXY') {
        out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
        if (Math.abs(m[6]) < 0.99999) {
            out[1] = Math.atan2(-m[2], m[10]);
            out[2] = Math.atan2(-m[4], m[5]);
        } else {
            out[1] = 0;
            out[2] = Math.atan2(m[1], m[0]);
        }
    } else if (order === 'ZYX') {
        out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
        if (Math.abs(m[2]) < 0.99999) {
            out[0] = Math.atan2(m[6], m[10]);
            out[2] = Math.atan2(m[1], m[0]);
        } else {
            out[0] = 0;
            out[2] = Math.atan2(-m[4], m[5]);
        }
    } else if (order === 'YZX') {
        out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
        if (Math.abs(m[1]) < 0.99999) {
            out[0] = Math.atan2(-m[9], m[5]);
            out[1] = Math.atan2(-m[2], m[0]);
        } else {
            out[0] = 0;
            out[1] = Math.atan2(m[8], m[10]);
        }
    } else if (order === 'XZY') {
        out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
        if (Math.abs(m[4]) < 0.99999) {
            out[0] = Math.atan2(m[6], m[5]);
            out[1] = Math.atan2(m[8], m[0]);
        } else {
            out[0] = Math.atan2(-m[9], m[10]);
            out[1] = 0;
        }
    }
    return out;
}

var EulerFunc$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fromRotationMatrix: fromRotationMatrix
});

const tempMat4$1 = new Mat4();

class Euler extends Array {

    constructor(x = 0, y = x, z = x, order = 'YXZ') {
        super(x, y, z);
        this.order = order;
        this.onChange = () => {};
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    set x(v) {
        this[0] = v;
        this.onChange();
    }

    set y(v) {
        this[1] = v;
        this.onChange();
    }

    set z(v) {
        this[2] = v;
        this.onChange();
    }

    set(x, y = x, z = x) {
        if (x.length) return this.copy(x);
        this[0] = x;
        this[1] = y;
        this[2] = z;
        this.onChange();
        return this;
    }

    copy(v) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        this.onChange();
        return this;
    }

    reorder(order) {
        this.order = order;
        this.onChange();
        return this;
    }

    fromRotationMatrix(m, order = this.order) {
        fromRotationMatrix(this, m, order);
        this.onChange();
        return this;
    }

    fromQuaternion(q, order = this.order) {
        tempMat4$1.fromQuaternion(q);
        return this.fromRotationMatrix(tempMat4$1, order);
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }

}

class Transform {

    constructor() {
        this.isTransform = true;

        this.parent = null;
        this.children = [];
        this.visible = true;

        this.matrix = new Mat4();
        this.worldMatrix = new Mat4();
        this.matrixAutoUpdate = true;

        this.position = new Vec3();
        this.quaternion = new Quat();
        this.scale = new Vec3(1);
        this.rotation = new Euler();
        this.up = new Vec3(0, 1, 0);

        this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);
        this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
    }

    setParent(parent) {
        if (this.parent && parent === this.parent) return this;
        parent.addChild(this);
        return this;
    }

    addChild(child, /* child, child, ... */) {
        if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) this.addChild(arguments[i]);
			return this;
		}
        if (! child || child === this) return this;
		if (child.parent) {
            if (child.parent === this) return this;
            child.parent.removeChild(child);
        }
        child.parent = this;
        this.children.push(child);
        return this;
    }

    removeChild(child) {
        if (arguments.length > 1) {
			for (let i = 0; i < arguments.length; i++) this.removeChild(arguments[i]);
			return this;
		}
        if (! child || child === this) return this;
        const index = this.children.indexOf(child);
        if (index !== -1) {
            child.parent = null;
            this.children.splice(index, 1);
        }
        return this;
    }

    updateMatrixWorld(force) {
        if (this.matrixAutoUpdate) this.updateMatrix();
        if (this.worldMatrixNeedsUpdate || force) {
            if (this.parent === null) this.worldMatrix.copy(this.matrix);
            else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
            this.worldMatrixNeedsUpdate = false;
            force = true;
        }

        for (let i = 0, l = this.children.length; i < l; i++) {
            this.children[i].updateMatrixWorld(force);
        }
        return this;
    }

    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale);
        this.worldMatrixNeedsUpdate = true;
        return this;
    }

    traverse(callback) {
        // Return true in callback to stop traversing children
        if (callback(this)) return;
        // Traverse children
        for (let i = 0, l = this.children.length; i < l; i++) {
            this.children[i].traverse(callback);
        }
    }

    decompose() {
        this.matrix.getTranslation(this.position);
        this.matrix.getRotation(this.quaternion);
        this.matrix.getScaling(this.scale);
        this.rotation.fromQuaternion(this.quaternion);
        return this;
    }

    lookAt(target, invert = false) {
        if (invert) this.matrix.lookAt(this.position, target, this.up);
        else this.matrix.lookAt(target, this.position, this.up);
        this.matrix.getRotation(this.quaternion);
        this.rotation.fromQuaternion(this.quaternion);
        return this;
    }

}

const _tempMat4 = new Mat4();
const _tempVec3a = new Vec3();
const _tempVec3b = new Vec3();

class Camera extends Transform {

    constructor({
        near = 0.1,
        far = 100,
        // Perspective
        fov = 45,
        aspect = 1,
        // Orthographic
        left,
        right,
        bottom,
        top,
        zoom = 1
    } = {}) {
        super();
        this.isCamera = true;

        Object.assign(this, { near, far, fov, aspect, left, right, bottom, top, zoom });

        this.projectionMatrix = new Mat4();
        this.viewMatrix = new Mat4();
        this.projectionViewMatrix = new Mat4();
        this.worldPosition = new Vec3();

        // Use orthographic if left/right set, else default to perspective camera
        this.type = (left || right) ? 'orthographic' : 'perspective';
        if (this.type === 'orthographic') this.orthographic();
        else this.perspective();
    }

    perspective({
        near = this.near,
        far = this.far,
        fov = this.fov,
        aspect = this.aspect
    } = {}) {
        Object.assign(this, { near, far, fov, aspect });
        this.projectionMatrix.fromPerspective({ fov: fov * (Math.PI / 180), aspect, near, far });
        this.type = 'perspective';
        return this;
    }

    orthographic({
        near = this.near,
        far = this.far,
        left = this.left,
        right = this.right,
        bottom = this.bottom,
        top = this.top,
        zoom = this.zoom,
    } = {}) {
        Object.assign(this, { near, far, left, right, bottom, top, zoom });
        left /= zoom;
        right /= zoom;
        bottom /= zoom;
        top /= zoom;
        this.projectionMatrix.fromOrthogonal({ left, right, bottom, top, near, far });
        this.type = 'orthographic';
        return this;
    }

    updateMatrixWorld() {
        super.updateMatrixWorld();
        this.viewMatrix.inverse(this.worldMatrix);
        this.worldMatrix.getTranslation(this.worldPosition);

        // Used for sorting
        this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
        return this;
    }

    lookAt(target) {
        super.lookAt(target, true);
        return this;
    }

    // Project 3D coordinate to 2D point
    project(v) {
        v.applyMatrix4(this.viewMatrix);
        v.applyMatrix4(this.projectionMatrix);
        return this;
    }

    // Unproject 2D point to 3D coordinate
    unproject(v) {
        v.applyMatrix4(_tempMat4.inverse(this.projectionMatrix));
        v.applyMatrix4(this.worldMatrix);
        return this;
    }

    updateFrustum() {
        if (! this.frustum) {
            this.frustum = [ new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3() ];
        }

        const m = this.projectionViewMatrix;
        this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x
        this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x
        this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y
        this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y
        this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)
        this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

        for (let i = 0; i < 6; i++) {
            const invLen = 1.0 / this.frustum[i].distance();
            this.frustum[i].multiply(invLen);
            this.frustum[i].constant *= invLen;
        }
    }

    frustumIntersectsMesh(node, worldMatrix = node.worldMatrix) {
        // ??add?? if (! node.geometry) return true;

        // If no geometry, or no position attribute, treat as frustumCulled false
        if (! node.geometry.attributes.position) return true;

        if (! node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();
        if (! node.geometry.bounds) return true;

        const center = _tempVec3a;
        center.copy(node.geometry.bounds.center);
        center.applyMatrix4(worldMatrix);

        const radius = node.geometry.bounds.radius * worldMatrix.getMaxScaleOnAxis();

        return this.frustumIntersectsSphere(center, radius);
    }

    frustumIntersectsSphere(center, radius) {
        const normal = _tempVec3b;

        for (let i = 0; i < 6; i++) {
            const plane = this.frustum[i];
            const distance = normal.copy(plane).dot(center) + plane.constant;
            if (distance < -radius) return false;
        }

        return true;
    }

}

const EPSILON$2 = 0.000001;

/**
 * Copies the upper-left 3x3 values into the given Mat3
 *
 * @param {Mat3} out the receiving 3x3 matrix
 * @param {Mat4} a   the source 4x4 matrix
 * @returns {Mat3} out
 */
function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}

/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {Mat3} out Mat3 receiving operation result
 * @param {Quat} q Quaternion to create matrix from
 * @returns {Mat3} out
 */
function fromQuat(out, q) {
    let x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;

    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
}

/**
 * Copy the values from one Mat3 to another
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the source matrix
 * @returns {Mat3} out
 */
function copy$1(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}

/**
 * Set the components of a Mat3 to the given values
 *
 * @param {Mat3} out the receiving matrix
 * @returns {Mat3} out
 */
function set$1(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}

/**
 * Set a Mat3 to the identity matrix
 *
 * @param {Mat3} out the receiving matrix
 * @returns {Mat3} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Transpose the values of a Mat3
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the source matrix
 * @returns {Mat3} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        let a01 = a[1],
            a02 = a[2],
            a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }

    return out;
}

/**
 * Inverts a Mat3
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the source matrix
 * @returns {Mat3} out
 */
function invert(out, a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    let a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    let a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    let b01 = a22 * a11 - a12 * a21;
    let b11 = -a22 * a10 + a12 * a20;
    let b21 = a21 * a10 - a11 * a20;

    // Calculate the determinant
    let det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}

/**
 * Calculates the determinant of a Mat3
 *
 * @param {Mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    let a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    let a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two Mat3's
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the first operand
 * @param {Mat3} b the second operand
 * @returns {Mat3} out
 */
function multiply$1(out, a, b) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    let a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    let a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    let b00 = b[0],
        b01 = b[1],
        b02 = b[2];
    let b10 = b[3],
        b11 = b[4],
        b12 = b[5];
    let b20 = b[6],
        b21 = b[7],
        b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}

/**
 * Translate a Mat3 by the given vector
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the matrix to translate
 * @param {Vec2} v vector to translate by
 * @returns {Mat3} out
 */
function translate(out, a, v) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        x = v[0],
        y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}

/**
 * Rotates a Mat3 by the given angle
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {Mat3} out
 */
function rotate(out, a, rad) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}

/**
 * Scales the Mat3 by the dimensions in the given Vec2
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the matrix to rotate
 * @param {Vec2} v the vector to scale the matrix by
 * @returns {Mat3} out
 **/
function scale$1(out, a, v) {
    let x = v[0],
        y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}

/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {Mat3} out Mat3 receiving operation result
 * @param {Mat4} a Mat4 to derive the normal matrix from
 * @returns {Mat3} out
 */
function normalFromMat4(out, a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {Mat3} out Mat3 frustum matrix will be written into
 * @param {Number} width Width of your gl context
 * @param {Number} height Height of gl context
 * @returns {Mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Adds two Mat3's
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the first operand
 * @param {Mat3} b the second operand
 * @returns {Mat3} out
 */
function add$1(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the first operand
 * @param {Mat3} b the second operand
 * @returns {Mat3} out
 */
function subtract$1(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {Mat3} out
 */
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}

var Mat3Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fromMat4: fromMat4,
    fromQuat: fromQuat,
    copy: copy$1,
    set: set$1,
    identity: identity,
    transpose: transpose,
    invert: invert,
    determinant: determinant,
    multiply: multiply$1,
    translate: translate,
    rotate: rotate,
    scale: scale$1,
    normalFromMat4: normalFromMat4,
    projection: projection,
    add: add$1,
    subtract: subtract$1,
    multiplyScalar: multiplyScalar
});

class Mat3 extends Array {

    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
        super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }

    set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        if (m00.length) return this.copy(m00);
        set$1(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }

    translate(v, m = this) {
        translate(this, m, v);
        return this;
    }

    rotate(v, m = this) {
        rotate(this, m, v);
        return this;
    }

    scale(v, m = this) {
        scale$1(this, m, v);
        return this;
    }

    multiply(ma, mb) {
        if (mb) {
            multiply$1(this, ma, mb);
        } else {
            multiply$1(this, this, ma);
        }
        return this;
    }

    identity() {
        identity(this);
        return this;
    }

    copy(m) {
        copy$1(this, m);
        return this;
    }

    fromMatrix4(m) {
        fromMat4(this, m);
        return this;
    }

    fromQuaternion(q) {
        fromQuat(this, q);
        return this;
    }

    fromBasis(vec3a, vec3b, vec3c) {
        this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
        return this;
    }

    inverse(m = this) {
        invert(this, m);
        return this;
    }

    getNormalMatrix(m) {
        normalFromMat4(this, m);
        return this;
    }

}

let _ID$1 = 1;

class Mesh extends Transform {

    constructor({
        geometry,
        program,
        mode = renderer.gl.TRIANGLES,
        frustumCulled = true,
        renderOrder = 0
    } = {}) {
        super();
        this.isMesh = true;

        if (! renderer) console.error(`Mesh.constructor: Renderer not found`);
        this.id = _ID$1++;
        this.geometry = geometry;
        this.program = program;
        this.mode = mode;

        // Used to skip frustum culling
        this.frustumCulled = frustumCulled;

        // Override sorting to force an order
        this.renderOrder = renderOrder;
        this.modelViewMatrix = new Mat4();
        this.normalMatrix = new Mat3();
        this.beforeRenderCallbacks = [];
        this.afterRenderCallbacks = [];
    }

    onBeforeRender(f) {
        this.beforeRenderCallbacks.push(f);
        return this;
    }

    onAfterRender(f) {
        this.afterRenderCallbacks.push(f);
        return this;
    }

    draw({ camera } = {}) {
        // Before render
        this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));

        // Set camera uniforms
        if (camera) {
            // Add empty matrix uniforms to program if unset
            if (! this.program.uniforms.modelMatrix) {
                Object.assign(this.program.uniforms, {
                    modelMatrix: { value: null },
                    viewMatrix: { value: null },
                    modelViewMatrix: { value: null },
                    normalMatrix: { value: null },
                    projectionMatrix: { value: null },
                    cameraPosition: { value: null },
                });
            }

            // Set the matrix uniforms
            this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
            this.program.uniforms.cameraPosition.value = camera.worldPosition;
            this.program.uniforms.viewMatrix.value = camera.viewMatrix;
            this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
            this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
            this.program.uniforms.modelMatrix.value = this.worldMatrix;
            this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
            this.program.uniforms.normalMatrix.value = this.normalMatrix;
        }

        // Determine if faces need to be flipped (when mesh scaled negatively)
        let flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;
        this.program.use({ flipFaces });
        this.geometry.draw({ mode: this.mode, program: this.program });

        // After render
        this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
    }
}

// TODO: delete texture
// TODO: use texSubImage2D for updates (video or when loaded)
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads

const emptyPixel = new Uint8Array(4);

let _ID = 1;

class Texture {

    constructor({
        image,
        target = renderer.gl.TEXTURE_2D,
        type = renderer.gl.UNSIGNED_BYTE,
        format = renderer.gl.RGBA,
        internalFormat = format,
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        generateMipmaps = true,
        minFilter = generateMipmaps ? renderer.gl.NEAREST_MIPMAP_LINEAR : renderer.gl.LINEAR,
        magFilter = renderer.gl.LINEAR,
        premultiplyAlpha = false,
        unpackAlignment = 4,
        flipY = target == renderer.gl.TEXTURE_2D ? true : false,
        anisotropy = 0,
        level = 0,
        width, // used for RenderTargets or Data Textures
        height = width,
    } = {}) {
        this.isTexture = true;

        this.id = _ID++;

        this.image = image;
        this.target = target;
        this.type = type;
        this.format = format;
        this.internalFormat = internalFormat;
        this.minFilter = minFilter;
        this.magFilter = magFilter;
        this.wrapS = wrapS;
        this.wrapT = wrapT;
        this.generateMipmaps = generateMipmaps;
        this.premultiplyAlpha = premultiplyAlpha;
        this.unpackAlignment = unpackAlignment;
        this.flipY = flipY;
        this.anisotropy = Math.min(anisotropy, renderer.capabilities.maxAnisotropy);
        this.level = level;
        this.width = width;
        this.height = height;
        this.texture = renderer.gl.createTexture();

        this.store = {
            image: null,
        };

        // Alias for state store to avoid redundant calls for global state
        renderer.glState = renderer.state;

        // State store to avoid redundant calls for per-texture state
        this.state = {};
        this.state.minFilter = renderer.gl.NEAREST_MIPMAP_LINEAR;
        this.state.magFilter = renderer.gl.LINEAR;
        this.state.wrapS = renderer.gl.REPEAT;
        this.state.wrapT = renderer.gl.REPEAT;
        this.state.anisotropy = 0;
    }

    bind() {
        // Already bound to active texture unit
        if (renderer.glState.textureUnits[renderer.glState.activeTextureUnit] === this.id) return;
        renderer.gl.bindTexture(this.target, this.texture);
        renderer.glState.textureUnits[renderer.glState.activeTextureUnit] = this.id;
    }

    update(textureUnit = 0) {
        const needsUpdate = !(this.image === this.store.image && !this.needsUpdate);

        // Make sure that texture is bound to its texture unit
        if (needsUpdate || renderer.glState.textureUnits[textureUnit] !== this.id) {
            // Set active texture unit to perform texture functions
            renderer.activeTexture(textureUnit);
            this.bind();
        }

        if (!needsUpdate) return;
        this.needsUpdate = false;

        if (this.flipY !== renderer.glState.flipY) {
            renderer.gl.pixelStorei(renderer.gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
            renderer.glState.flipY = this.flipY;
        }

        if (this.premultiplyAlpha !== renderer.glState.premultiplyAlpha) {
            renderer.gl.pixelStorei(renderer.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
            renderer.glState.premultiplyAlpha = this.premultiplyAlpha;
        }

        if (this.unpackAlignment !== renderer.glState.unpackAlignment) {
            renderer.gl.pixelStorei(renderer.gl.UNPACK_ALIGNMENT, this.unpackAlignment);
            renderer.glState.unpackAlignment = this.unpackAlignment;
        }

        if (this.minFilter !== this.state.minFilter) {
            renderer.gl.texParameteri(this.target, renderer.gl.TEXTURE_MIN_FILTER, this.minFilter);
            this.state.minFilter = this.minFilter;
        }

        if (this.magFilter !== this.state.magFilter) {
            renderer.gl.texParameteri(this.target, renderer.gl.TEXTURE_MAG_FILTER, this.magFilter);
            this.state.magFilter = this.magFilter;
        }

        if (this.wrapS !== this.state.wrapS) {
            renderer.gl.texParameteri(this.target, renderer.gl.TEXTURE_WRAP_S, this.wrapS);
            this.state.wrapS = this.wrapS;
        }

        if (this.wrapT !== this.state.wrapT) {
            renderer.gl.texParameteri(this.target, renderer.gl.TEXTURE_WRAP_T, this.wrapT);
            this.state.wrapT = this.wrapT;
        }

        if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
            renderer.gl.texParameterf(
                this.target,
                renderer.getExtension('EXT_texture_filter_anisotropic').TEXTURE_MAX_ANISOTROPY_EXT,
                this.anisotropy
            );
            this.state.anisotropy = this.anisotropy;
        }

        if (this.image) {
            if (this.image.width) {
                this.width = this.image.width;
                this.height = this.image.height;
            }

            if (this.target === renderer.gl.TEXTURE_CUBE_MAP) {
                // For cube maps
                for (let i = 0; i < 6; i++) {
                    renderer.gl.texImage2D(
                        renderer.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        this.level,
                        this.internalFormat,
                        this.format,
                        this.type,
                        this.image[i]
                    );
                }
            } else if (ArrayBuffer.isView(this.image)) {
                // Data texture
                renderer.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
            } else if (this.image.isCompressedTexture) {
                // Compressed texture
                for (let level = 0; level < this.image.length; level++) {
                    renderer.gl.compressedTexImage2D(
                        this.target,
                        level,
                        this.internalFormat,
                        this.image[level].width,
                        this.image[level].height,
                        0,
                        this.image[level].data
                    );
                }
            } else {
                // Regular texture
                renderer.gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
            }

            if (this.generateMipmaps) {
                renderer.gl.generateMipmap(this.target);
            }

            // Callback for when data is pushed to GPU
            this.onUpdate && this.onUpdate();
        } else {
            if (this.target === renderer.gl.TEXTURE_CUBE_MAP) {
                // Upload empty pixel for each side while no image to avoid errors while image or video loading
                for (let i = 0; i < 6; i++) {
                    renderer.gl.texImage2D(
                        renderer.gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        0,
                        renderer.gl.RGBA,
                        1,
                        1,
                        0,
                        renderer.gl.RGBA,
                        renderer.gl.UNSIGNED_BYTE,
                        emptyPixel
                    );
                }
            } else if (this.width) {
                // Image intentionally left null for RenderTarget
                renderer.gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
            } else {
                // Upload empty pixel if no image to avoid errors while image or video loading
                renderer.gl.texImage2D(this.target, 0, renderer.gl.RGBA, 1, 1, 0, renderer.gl.RGBA, renderer.gl.UNSIGNED_BYTE, emptyPixel);
            }
        }
        this.store.image = this.image;
    }
}

// TODO: test stencil and depth

class RenderTarget {

    constructor({
        width = renderer.gl.canvas.width,
        height = renderer.gl.canvas.height,
        target = renderer.gl.FRAMEBUFFER,
        color = 1,                  // number of color attachments
        depth = true,
        stencil = false,
        depthTexture = false,       // note - stencil breaks
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        minFilter = renderer.gl.LINEAR,
        magFilter = minFilter,
        type = renderer.gl.UNSIGNED_BYTE,
        format = renderer.gl.RGBA,
        internalFormat = format,
        unpackAlignment,
        premultiplyAlpha,
    } = {}) {
        this.isRenderTarget = true;

        renderer.gl = renderer.gl;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.buffer = renderer.gl.createFramebuffer();
        this.target = target;
        renderer.bindFramebuffer(this);

        this.textures = [];
        const drawBuffers = [];

        // Create and attach required num of color textures
        for (let i = 0; i < color; i++) {
            this.textures.push(
                new Texture({
                    width,
                    height,
                    wrapS,
                    wrapT,
                    minFilter,
                    magFilter,
                    type,
                    format,
                    internalFormat,
                    unpackAlignment,
                    premultiplyAlpha,
                    flipY: false,
                    generateMipmaps: false,
                })
            );
            this.textures[i].update();
            renderer.gl.framebufferTexture2D(this.target, renderer.gl.COLOR_ATTACHMENT0 + i, renderer.gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */);
            drawBuffers.push(renderer.gl.COLOR_ATTACHMENT0 + i);
        }

        // For multi-render targets shader access
        if (drawBuffers.length > 1) renderer.gl.drawBuffers(drawBuffers);

        // Alias for majority of use cases
        this.texture = this.textures[0];

        // Note depth textures break stencil - so can't use together
        if (depthTexture) {
            this.depthTexture = new Texture({
                width,
                height,
                minFilter: renderer.gl.NEAREST,
                magFilter: renderer.gl.NEAREST,
                format: renderer.gl.DEPTH_COMPONENT,
                internalFormat: renderer.gl.DEPTH_COMPONENT16,
                type: renderer.gl.UNSIGNED_INT,
            });
            this.depthTexture.update();
            renderer.gl.framebufferTexture2D(this.target, renderer.gl.DEPTH_ATTACHMENT, renderer.gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */);
        } else {
            // Render buffers
            if (depth && !stencil) {
                this.depthBuffer = renderer.gl.createRenderbuffer();
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.depthBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.DEPTH_COMPONENT16, width, height);
                renderer.gl.framebufferRenderbuffer(this.target, renderer.gl.DEPTH_ATTACHMENT, renderer.gl.RENDERBUFFER, this.depthBuffer);
            }

            if (stencil && !depth) {
                this.stencilBuffer = renderer.gl.createRenderbuffer();
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.stencilBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.STENCIL_INDEX8, width, height);
                renderer.gl.framebufferRenderbuffer(this.target, renderer.gl.STENCIL_ATTACHMENT, renderer.gl.RENDERBUFFER, this.stencilBuffer);
            }

            if (depth && stencil) {
                this.depthStencilBuffer = renderer.gl.createRenderbuffer();
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.depthStencilBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.DEPTH_STENCIL, width, height);
                renderer.gl.framebufferRenderbuffer(this.target, renderer.gl.DEPTH_STENCIL_ATTACHMENT, renderer.gl.RENDERBUFFER, this.depthStencilBuffer);
            }
        }

        renderer.bindFramebuffer({ target: this.target });
    }

    setSize(width, height) {
        if (this.width === width && this.height === height) return;

        this.width = width;
        this.height = height;
        renderer.bindFramebuffer(this);

        for (let i = 0; i < this.textures.length; i++) {
            this.textures[i].width = width;
            this.textures[i].height = height;
            this.textures[i].needsUpdate = true;
            this.textures[i].update();
            renderer.gl.framebufferTexture2D(this.target, renderer.gl.COLOR_ATTACHMENT0 + i, renderer.gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */);
        }

        if (this.depthTexture) {
            this.depthTexture.width = width;
            this.depthTexture.height = height;
            this.depthTexture.needsUpdate = true;
            this.depthTexture.update();
            renderer.gl.framebufferTexture2D(this.target, renderer.gl.DEPTH_ATTACHMENT, renderer.gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */);
        } else {
            if (this.depthBuffer) {
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.depthBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.DEPTH_COMPONENT16, width, height);
            }

            if (this.stencilBuffer) {
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.stencilBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.STENCIL_INDEX8, width, height);
            }

            if (this.depthStencilBuffer) {
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.depthStencilBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.DEPTH_STENCIL, width, height);
            }
        }

        renderer.bindFramebuffer({ target: this.target });
    }
}

class MeshProgram extends Program {

    static vertex = /* glsl */ `#version 300 es
        in vec2 uv;
        in vec3 position;
        in vec3 normal;

        vec3 bary[3] = vec3[](vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0));

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform mat3 normalMatrix;

        #ifdef FLAT_SHADED
            flat out vec3 vNormal;
        #else
            out vec3 vNormal;
        #endif

        out vec3 vBary;
        out vec2 vUv;

        void main() {
            vBary = bary[int(mod(float(gl_VertexID), 3.0))];
            vNormal = normalize(normalMatrix * normal);
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    static fragment = /* glsl */ `#version 300 es
        precision highp float;

        uniform float uNormalIntensity;
        uniform float uOpacity;
        uniform sampler2D tMap;

        #ifdef FLAT_SHADED
            flat in vec3 vNormal;
        #else
            in vec3 vNormal;
        #endif

        in vec3 vBary;
        in vec2 vUv;

        layout(location = 0) out highp vec4 pc_fragColor;

        void main() {


            vec3 bary = vBary;

            // vec3 color = normalize(vNormal); // vec3(0);
            // float alpha = 1.0;

            // // Line thickness - in pixels
            // float width = 5.0 * 0.5;
            // vec3 d = fwidth(bary);
            // vec3 s = smoothstep(d * (width + 0.5), d * (width - 0.5), bary);
            // alpha *= max(max(s.x, s.y), s.z);

            // // Dashes
            // alpha *= step(0.0, sin(max(bary.x, bary.y) * 3.14 * 5.0));

            // // Back face shading
            // color = mix(vec3(1, 0, 0), color, vec3(gl_FrontFacing));
            // alpha = mix(alpha * 0.1 + 0.02, alpha, float(gl_FrontFacing));

            // pc_fragColor.rgb = color;
            // pc_fragColor.a = alpha;


            vec3 normal = normalize(vNormal);

            vec3 tex = texture(tMap, vUv).rgb;
            vec3 light = normalize(vec3(0.5, 1.0, -0.3));
            float shading = dot(normal, light) * 0.15;
            vec3 diffuse = mix(tex + shading, normal, uNormalIntensity);

            pc_fragColor = vec4(diffuse, uOpacity);

            // pc_fragColor = vec4(normalize(vNormal), 1.0);
        }
    `;

    #flatShading = false;

    #mapDiffuse = 0;
    #normalIntensity = 0.0;
    #opacity = 1.0;

    constructor({
        flatShading = false,
        normalIntensity = 0.0,
        opacity = 1.0,
        texture = 0,
        ...programProps
    } = {}) {

        super({
            ...programProps,
            vertex: MeshProgram.vertex,
            fragment: MeshProgram.fragment,
            uniforms: {
                uNormalIntensity: { value: normalIntensity },
                uOpacity: { value: opacity },
                tMap: { value: texture },
            },
            defines: {
                FLAT_SHADED: flatShading,
            }
        });

        this.#flatShading = flatShading;
        this.#mapDiffuse = texture;
        this.#opacity = opacity;
    }

    rebuildProgram() {
        this.buildProgram({
            vertex: MeshProgram.vertex,
            fragment: MeshProgram.fragment,
            uniforms: {
                uNormalIntensity: { value: this.#normalIntensity },
                uOpacity: { value: this.#opacity },
                tMap: { value: this.#mapDiffuse },
            },
            defines: {
                FLAT_SHADED: this.#flatShading,
            }
        });
    }

    get flatShading() { return this.#flatShading; }

    set flatShading(flatShading) {
        if (this.#flatShading === flatShading) return;
        this.#flatShading = flatShading;
        this.rebuildProgram();
    }

    get normalIntensity() { return this.#normalIntensity; }

    set normalIntensity(normalIntensity) {
        this.uniforms.uNormalIntensity.value = normalIntensity;
    }

    get opacity() { return this.#opacity; }

    set opacity(opacity) {
        this.uniforms.uOpacity.value = opacity;
    }

}

const EPSILON$1 = 0.000001;

/**
 * Copy the values from one Vec2 to another
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the source vector
 * @returns {Vec2} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}

/**
 * Set the components of a Vec2 to the given values
 *
 * @param {Vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {Vec2} out
 */
function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
}

/**
 * Adds two Vec2's
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}

/**
 * Multiplies two Vec2's
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}

/**
 * Divides two Vec2's
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}

/**
 * Scales a Vec2 by a scalar number
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {Vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}

/**
 * Calculates the euclidian distance between two Vec2's
 *
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared euclidian distance between two Vec2's
 *
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x * x + y * y;
}

/**
 * Calculates the length of a Vec2
 *
 * @param {Vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a Vec2
 *
 * @param {Vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1];
    return x * x + y * y;
}

/**
 * Negates the components of a Vec2
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a vector to negate
 * @returns {Vec2} out
 */
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}

/**
 * Returns the inverse of the components of a Vec2
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a vector to invert
 * @returns {Vec2} out
 */
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}

/**
 * Normalize a Vec2
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a vector to normalize
 * @returns {Vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1];
    var len = x * x + y * y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
}

/**
 * Calculates the dot product of two Vec2's
 *
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two Vec2's
 * Note that the cross product returns a scalar
 *
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Number} cross product of a and b
 */
function cross(a, b) {
    return a[0] * b[1] - a[1] * b[0];
}

/**
 * Performs a linear interpolation between two Vec2's
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Vec2} out
 */
function lerp(out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}

/**
 * Transforms the Vec2 with a Mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the vector to transform
 * @param {Mat3} m matrix to transform with
 * @returns {Vec2} out
 */
function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}

/**
 * Transforms the Vec2 with a Mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the vector to transform
 * @param {Mat4} m matrix to transform with
 * @returns {Vec2} out
 */
function transformMat4(out, a, m) {
    let x = a[0];
    let y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {Vec2} a The first vector.
 * @param {Vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}

var Vec2Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    copy: copy,
    set: set,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    scale: scale,
    distance: distance,
    squaredDistance: squaredDistance,
    length: length,
    squaredLength: squaredLength,
    negate: negate,
    inverse: inverse,
    normalize: normalize,
    dot: dot,
    cross: cross,
    lerp: lerp,
    transformMat3: transformMat3,
    transformMat4: transformMat4,
    exactEquals: exactEquals
});

class Vec2 extends Array {

    constructor(x = 0, y = x) {
        super(x, y);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set(x, y = x) {
        if (x.length) return this.copy(x);
        set(this, x, y);
        return this;
    }

    copy(v) {
        copy(this, v);
        return this;
    }

    add(va, vb) {
        if (vb) add(this, va, vb);
        else add(this, this, va);
        return this;
    }

    sub(va, vb) {
        if (vb) subtract(this, va, vb);
        else subtract(this, this, va);
        return this;
    }

    multiply(v) {
        if (v.length) multiply(this, this, v);
        else scale(this, this, v);
        return this;
    }

    divide(v) {
        if (v.length) divide(this, this, v);
        else scale(this, this, 1 / v);
        return this;
    }

    inverse(v = this) {
        inverse(this, v);
        return this;
    }

    // Can't use 'length' as Array.prototype uses it
    len() {
        return length(this);
    }

    distance(v) {
        if (v) return distance(this, v);
        else return length(this);
    }

    squaredLen() {
        return this.squaredDistance();
    }

    squaredDistance(v) {
        if (v) return squaredDistance(this, v);
        else return squaredLength(this);
    }

    negate(v = this) {
        negate(this, v);
        return this;
    }

    cross(va, vb) {
        if (vb) return cross(va, vb);
        return cross(this, va);
    }

    scale(v) {
        scale(this, this, v);
        return this;
    }

    normalize() {
        normalize(this, this);
        return this;
    }

    dot(v) {
        return dot(this, v);
    }

    equals(v) {
        return exactEquals(this, v);
    }

    applyMatrix3(mat3) {
        transformMat3(this, this, mat3);
        return this;
    }

    applyMatrix4(mat4) {
        transformMat4(this, this, mat4);
        return this;
    }

    lerp(v, a) {
        lerp(this, this, v, a);
        return this;
    }

    clone() {
        return new Vec2(this[0], this[1]);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        return a;
    }

    log(description = '') {
        if (description !== '') description += ' - ';
        console.log(`${description}X: ${this.x}, Y: ${this.y}`);
    }

}

// TODO: barycentric code shouldn't be here, but where?

const tempVec2a = new Vec2();
const tempVec2b = new Vec2();
const tempVec2c = new Vec2();

const tempVec3a = new Vec3();
const tempVec3b = new Vec3();
const tempVec3c = new Vec3();
const tempVec3d = new Vec3();
const tempVec3e = new Vec3();
const tempVec3f = new Vec3();
const tempVec3g = new Vec3();
const tempVec3h = new Vec3();
const tempVec3i = new Vec3();
const tempVec3j = new Vec3();
const tempVec3k = new Vec3();

const tempMat4 = new Mat4();

class Raycast {

    constructor() {
        this.origin = new Vec3();
        this.direction = new Vec3();
    }

    // Set ray from mouse unprojection
    castMouse(camera, mouse = [ 0, 0 ]) {
        if (camera.type === 'orthographic') {
            // Set origin
            // Since camera is orthographic, origin is not the camera position
            const { left, right, bottom, top, zoom } = camera;
            const x = left / zoom + ((right - left) / zoom) * (mouse[0] * 0.5 + 0.5);
            const y = bottom / zoom + ((top - bottom) / zoom) * (mouse[1] * 0.5 + 0.5);
            this.origin.set(x, y, 0);
            this.origin.applyMatrix4(camera.worldMatrix);

            // Set direction
            // https://community.khronos.org/t/get-direction-from-transformation-matrix-or-quat/65502/2
            this.direction.x = -camera.worldMatrix[8];
            this.direction.y = -camera.worldMatrix[9];
            this.direction.z = -camera.worldMatrix[10];
        } else {
            // Set origin
            camera.worldMatrix.getTranslation(this.origin);

            // Set direction
            this.direction.set(mouse[0], mouse[1], 0.5);
            camera.unproject(this.direction);
            this.direction.sub(this.origin).normalize();
        }
    }

    intersectBounds(meshes, { maxDistance, output = [] } = {}) {
        if (! Array.isArray(meshes)) meshes = [ meshes ];

        const invWorldMat4 = tempMat4;
        const origin = tempVec3a;
        const direction = tempVec3b;

        const hits = output;
        hits.length = 0;

        meshes.forEach((mesh) => {

            // Create bounds
            if (!mesh.geometry.bounds || mesh.geometry.bounds.radius === Infinity) mesh.geometry.computeBoundingSphere();
            const bounds = mesh.geometry.bounds;
            invWorldMat4.inverse(mesh.worldMatrix);

            // Get max distance locally
            let localMaxDistance;
            if (maxDistance) {
                direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
                localMaxDistance = maxDistance * direction.len();
            }

            // Take world space ray and make it object space to align with bounding box
            origin.copy(this.origin).applyMatrix4(invWorldMat4);
            direction.copy(this.direction).transformDirection(invWorldMat4);

            // Break out early if bounds too far away from origin
            if (maxDistance) {
                if (origin.distance(bounds.center) - bounds.radius > localMaxDistance) return;
            }

            let localDistance = 0;

            // Check origin isn't inside bounds before testing intersection
            if (mesh.geometry.raycast === 'sphere') {
                if (origin.distance(bounds.center) > bounds.radius) {
                    localDistance = this.intersectSphere(bounds, origin, direction);
                    if (!localDistance) return;
                }
            } else {
                if (
                    origin.x < bounds.min.x ||
                    origin.x > bounds.max.x ||
                    origin.y < bounds.min.y ||
                    origin.y > bounds.max.y ||
                    origin.z < bounds.min.z ||
                    origin.z > bounds.max.z
                ) {
                    localDistance = this.intersectBox(bounds, origin, direction);
                    if (!localDistance) return;
                }
            }

            if (maxDistance && localDistance > localMaxDistance) return;

            // Create object on mesh to avoid generating lots of objects
            if (!mesh.hit) mesh.hit = { localPoint: new Vec3(), point: new Vec3() };

            mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
            mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
            mesh.hit.distance = mesh.hit.point.distance(this.origin);

            hits.push(mesh);
        });

        hits.sort((a, b) => a.hit.distance - b.hit.distance);
        return hits;
    }

    intersectMeshes(meshes, { cullFace = true, maxDistance, includeUV = true, includeNormal = true, output = [] } = {}) {
        // Test bounds first before testing geometry
        const hits = this.intersectBounds(meshes, { maxDistance, output });
        if (!hits.length) return hits;

        const invWorldMat4 = tempMat4;
        const origin = tempVec3a;
        const direction = tempVec3b;
        const a = tempVec3c;
        const b = tempVec3d;
        const c = tempVec3e;
        const closestFaceNormal = tempVec3f;
        const faceNormal = tempVec3g;
        const barycoord = tempVec3h;
        const uvA = tempVec2a;
        const uvB = tempVec2b;
        const uvC = tempVec2c;

        for (let i = hits.length - 1; i >= 0; i--) {
            const mesh = hits[i];
            invWorldMat4.inverse(mesh.worldMatrix);

            // Get max distance locally
            let localMaxDistance;
            if (maxDistance) {
                direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
                localMaxDistance = maxDistance * direction.len();
            }

            // Take world space ray and make it object space to align with bounding box
            origin.copy(this.origin).applyMatrix4(invWorldMat4);
            direction.copy(this.direction).transformDirection(invWorldMat4);

            let localDistance = 0;
            let closestA, closestB, closestC;

            const geometry = mesh.geometry;
            const attributes = geometry.attributes;
            const index = attributes.index;
            const position = attributes.position;

            const start = Math.max(0, geometry.drawRange.start);
            const end = Math.min(index ? index.count : position.count, geometry.drawRange.start + geometry.drawRange.count);
            const stride = position.stride ? position.stride / position.data.BYTES_PER_ELEMENT : position.size;

            for (let j = start; j < end; j += 3) {
                // Position attribute indices for each triangle
                const ai = index ? index.data[j] : j;
                const bi = index ? index.data[j + 1] : j + 1;
                const ci = index ? index.data[j + 2] : j + 2;

                a.fromArray(position.data, ai * stride);
                b.fromArray(position.data, bi * stride);
                c.fromArray(position.data, ci * stride);

                const distance = this.intersectTriangle(a, b, c, cullFace, origin, direction, faceNormal);
                if (!distance) continue;

                // Too far away
                if (maxDistance && distance > localMaxDistance) continue;

                if (!localDistance || distance < localDistance) {
                    localDistance = distance;
                    closestA = ai;
                    closestB = bi;
                    closestC = ci;
                    closestFaceNormal.copy(faceNormal);
                }
            }

            if (!localDistance) hits.splice(i, 1);

            // Update hit values from bounds-test
            mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
            mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
            mesh.hit.distance = mesh.hit.point.distance(this.origin);

            // Add unique hit objects on mesh to avoid generating lots of objects
            if (!mesh.hit.faceNormal) {
                mesh.hit.localFaceNormal = new Vec3();
                mesh.hit.faceNormal = new Vec3();
                mesh.hit.uv = new Vec2();
                mesh.hit.localNormal = new Vec3();
                mesh.hit.normal = new Vec3();
            }

            // Add face normal data which is already computed
            mesh.hit.localFaceNormal.copy(closestFaceNormal);
            mesh.hit.faceNormal.copy(mesh.hit.localFaceNormal).transformDirection(mesh.worldMatrix);

            // Optional data, opt out to optimise a bit if necessary
            if (includeUV || includeNormal) {
                // Calculate barycoords to find uv values at hit point
                a.fromArray(position.data, closestA * 3);
                b.fromArray(position.data, closestB * 3);
                c.fromArray(position.data, closestC * 3);
                this.getBarycoord(mesh.hit.localPoint, a, b, c, barycoord);
            }

            if (includeUV && attributes.uv) {
                uvA.fromArray(attributes.uv.data, closestA * 2);
                uvB.fromArray(attributes.uv.data, closestB * 2);
                uvC.fromArray(attributes.uv.data, closestC * 2);
                mesh.hit.uv.set(
                    uvA.x * barycoord.x + uvB.x * barycoord.y + uvC.x * barycoord.z,
                    uvA.y * barycoord.x + uvB.y * barycoord.y + uvC.y * barycoord.z
                );
            }

            if (includeNormal && attributes.normal) {
                a.fromArray(attributes.normal.data, closestA * 3);
                b.fromArray(attributes.normal.data, closestB * 3);
                c.fromArray(attributes.normal.data, closestC * 3);
                mesh.hit.localNormal.set(
                    a.x * barycoord.x + b.x * barycoord.y + c.x * barycoord.z,
                    a.y * barycoord.x + b.y * barycoord.y + c.y * barycoord.z,
                    a.z * barycoord.x + b.z * barycoord.y + c.z * barycoord.z
                );

                mesh.hit.normal.copy(mesh.hit.localNormal).transformDirection(mesh.worldMatrix);
            }
        }

        hits.sort((a, b) => a.hit.distance - b.hit.distance);
        return hits;
    }

    intersectSphere(sphere, origin = this.origin, direction = this.direction) {
        const ray = tempVec3c;
        ray.sub(sphere.center, origin);
        const tca = ray.dot(direction);
        const d2 = ray.dot(ray) - tca * tca;
        const radius2 = sphere.radius * sphere.radius;
        if (d2 > radius2) return 0;
        const thc = Math.sqrt(radius2 - d2);
        const t0 = tca - thc;
        const t1 = tca + thc;
        if (t0 < 0 && t1 < 0) return 0;
        if (t0 < 0) return t1;
        return t0;
    }

    // Ray AABB - Ray Axis aligned bounding box testing
    intersectBox(box, origin = this.origin, direction = this.direction) {
        let tmin, tmax, tYmin, tYmax, tZmin, tZmax;
        const invdirx = 1 / direction.x;
        const invdiry = 1 / direction.y;
        const invdirz = 1 / direction.z;
        const min = box.min;
        const max = box.max;
        tmin = ((invdirx >= 0 ? min.x : max.x) - origin.x) * invdirx;
        tmax = ((invdirx >= 0 ? max.x : min.x) - origin.x) * invdirx;
        tYmin = ((invdiry >= 0 ? min.y : max.y) - origin.y) * invdiry;
        tYmax = ((invdiry >= 0 ? max.y : min.y) - origin.y) * invdiry;
        if (tmin > tYmax || tYmin > tmax) return 0;
        if (tYmin > tmin) tmin = tYmin;
        if (tYmax < tmax) tmax = tYmax;
        tZmin = ((invdirz >= 0 ? min.z : max.z) - origin.z) * invdirz;
        tZmax = ((invdirz >= 0 ? max.z : min.z) - origin.z) * invdirz;
        if (tmin > tZmax || tZmin > tmax) return 0;
        if (tZmin > tmin) tmin = tZmin;
        if (tZmax < tmax) tmax = tZmax;
        if (tmax < 0) return 0;
        return tmin >= 0 ? tmin : tmax;
    }

    intersectTriangle(a, b, c, backfaceCulling = true, origin = this.origin, direction = this.direction, normal = tempVec3g) {
        // from https://github.com/mrdoob/three.js/blob/master/src/math/Ray.js
        // which is from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
        const edge1 = tempVec3h;
        const edge2 = tempVec3i;
        const diff = tempVec3j;
        edge1.sub(b, a);
        edge2.sub(c, a);
        normal.cross(edge1, edge2);
        let DdN = direction.dot(normal);
        if (!DdN) return 0;
        let sign;
        if (DdN > 0) {
            if (backfaceCulling) return 0;
            sign = 1;
        } else {
            sign = -1;
            DdN = -DdN;
        }
        diff.sub(origin, a);
        let DdQxE2 = sign * direction.dot(edge2.cross(diff, edge2));
        if (DdQxE2 < 0) return 0;
        let DdE1xQ = sign * direction.dot(edge1.cross(diff));
        if (DdE1xQ < 0) return 0;
        if (DdQxE2 + DdE1xQ > DdN) return 0;
        let QdN = -sign * diff.dot(normal);
        if (QdN < 0) return 0;
        return QdN / DdN;
    }

    getBarycoord(point, a, b, c, target = tempVec3h) {
        // From https://github.com/mrdoob/three.js/blob/master/src/math/Triangle.js
        // static / instance method to calculate barycentric coordinates
        // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
        const v0 = tempVec3i;
        const v1 = tempVec3j;
        const v2 = tempVec3k;
        v0.sub(c, a);
        v1.sub(b, a);
        v2.sub(point, a);
        const dot00 = v0.dot(v0);
        const dot01 = v0.dot(v1);
        const dot02 = v0.dot(v2);
        const dot11 = v1.dot(v1);
        const dot12 = v1.dot(v2);
        const denom = dot00 * dot11 - dot01 * dot01;
        if (denom === 0) return target.set(-2, -1, -1);
        const invDenom = 1 / denom;
        const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
        const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
        return target.set(1 - u - v, v, u);
    }

}

class Triangle extends Geometry {

    constructor({
        attributes = {}
    } = {}) {
        Object.assign(attributes, {
            position: { size: 2, data: new Float32Array([ -1, -1, 3, -1, -1, 3 ]) },
            uv: { size: 2, data: new Float32Array([ 0, 0, 2, 0, 0, 2 ]) },
        });

        super(attributes);
    }

}

// TODO: Destroy render targets if size changed and exists

class Post {

    constructor({
        width,
        height,
        dpr,
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        minFilter = renderer.gl.LINEAR,
        magFilter = renderer.gl.LINEAR,
        geometry = new Triangle(),
        targetOnly = null,
    } = {}) {

        this.options = { wrapS, wrapT, minFilter, magFilter };

        this.passes = [];

        this.geometry = geometry;

        this.uniform = { value: null };
        this.targetOnly = targetOnly;

        const fbo = (this.fbo = {
            read: null,
            write: null,
            swap: () => {
                let temp = fbo.read;
                fbo.read = fbo.write;
                fbo.write = temp;
            },
        });

        this.resize({ width, height, dpr });
    }

    addPass({ vertex = defaultVertex, fragment = defaultFragment, uniforms = {}, textureUniform = 'tMap', enabled = true } = {}) {
        uniforms[textureUniform] = { value: this.fbo.read.texture };

        const program = new Program({ vertex, fragment, uniforms });
        const mesh = new Mesh({ geometry: this.geometry, program });

        const pass = {
            mesh,
            program,
            uniforms,
            enabled,
            textureUniform,
        };

        this.passes.push(pass);
        return pass;
    }

    resize({ width, height, dpr } = {}) {
        if (dpr) this.dpr = dpr;
        if (width) {
            this.width = width;
            this.height = height || width;
        }

        dpr = this.dpr || renderer.dpr;
        width = Math.floor((this.width || renderer.width) * dpr);
        height = Math.floor((this.height || renderer.height) * dpr);

        this.options.width = width;
        this.options.height = height;

        this.fbo.read = new RenderTarget(this.options);
        this.fbo.write = new RenderTarget(this.options);
    }

    // Uses same arguments as renderer.render, with addition of optional texture passed in to avoid scene render
    render({ scene, camera, texture, target = null, update = true, sort = true, frustumCull = true }) {
        const enabledPasses = this.passes.filter((pass) => pass.enabled);

        if (!texture) {
            renderer.render({
                scene,
                camera,
                target: enabledPasses.length || (! target && this.targetOnly) ? this.fbo.write : target,
                update,
                sort,
                frustumCull,
            });
            this.fbo.swap();
        }

        enabledPasses.forEach((pass, i) => {
            pass.mesh.program.uniforms[pass.textureUniform].value = ! i && texture ? texture : this.fbo.read.texture;
            renderer.render({
                scene: pass.mesh,
                target: i === enabledPasses.length - 1 && (target || ! this.targetOnly) ? target : this.fbo.write,
                clear: true,
            });
            this.fbo.swap();
        });

        this.uniform.value = this.fbo.read.texture;
    }

}

/***** Internal *****/

const defaultVertex = /* glsl */ `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;

const defaultFragment = /* glsl */ `
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;

// Based from ThreeJS' OrbitControls class, rewritten using es6 with some additions and subtractions.

const STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, DOLLY_PAN: 3 };

const _tempVec3 = new Vec3();
const _tempVec2a = new Vec2();
const _tempVec2b = new Vec2();

class Orbit {

    constructor(object, {
        element = document,
        enabled = true,
        target = new Vec3(),
        ease = 0.25,
        inertia = 0.85,
        enableRotate = true,
        rotateSpeed = 0.1,
        autoRotate = false,
        autoRotateSpeed = 1.0,
        enableZoom = true,
        zoomSpeed = 1,
        zoomStyle = 'dolly',
        enablePan = true,
        panSpeed = 0.1,
        minPolarAngle = 0,
        maxPolarAngle = Math.PI,
        minAzimuthAngle = -Infinity,
        maxAzimuthAngle = Infinity,
        minDistance = 0,
        maxDistance = Infinity,
    } = {}) {
        this.enabled = enabled;
        this.target = target;
        this.zoomStyle = zoomStyle;

        // Catch attempts to disable - set to 1 so has no effect
        ease = ease || 1;
        inertia = inertia || 0;

        this.minDistance = minDistance;
        this.maxDistance = maxDistance;

        // Current position in sphericalTarget coordinates
        const sphericalDelta = { radius: 1, phi: 0, theta: 0 };
        const sphericalTarget = { radius: 1, phi: 0, theta: 0 };
        const spherical = { radius: 1, phi: 0, theta: 0 };
        const panDelta = new Vec3();

        // Grab initial position values
        const offset = new Vec3();
        offset.copy(object.position).sub(this.target);
        spherical.radius = sphericalTarget.radius = offset.distance();
        spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
        spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));

        this.offset = offset;

        this.update = () => {
            if (autoRotate) {
                handleAutoRotate();
            }

            // apply delta
            sphericalTarget.radius *= sphericalDelta.radius;
            sphericalTarget.theta += sphericalDelta.theta;
            sphericalTarget.phi += sphericalDelta.phi;

            // apply boundaries
            sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
            sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
            sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius));

            // ease values
            spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
            spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
            spherical.radius += (sphericalTarget.radius - spherical.radius) * ease;

            // apply pan to target. As offset is relative to target, it also shifts
            this.target.add(panDelta);

            // apply rotation to offset
            let sinPhiRadius = spherical.radius * Math.sin(Math.max(0.000001, spherical.phi));
            offset.x = sinPhiRadius * Math.sin(spherical.theta);
            offset.y = spherical.radius * Math.cos(spherical.phi);
            offset.z = sinPhiRadius * Math.cos(spherical.theta);

            // Apply updated values to object
            object.position.copy(this.target).add(offset);
            object.lookAt(this.target);

            // Apply inertia to values
            sphericalDelta.theta *= inertia;
            sphericalDelta.phi *= inertia;
            panDelta.multiply(inertia);

            // Reset scale every frame to avoid applying scale multiple times
            sphericalDelta.radius = 1;
        };

        // Updates internals with new position
        this.forcePosition = () => {
            offset.copy(object.position).sub(this.target);
            spherical.radius = sphericalTarget.radius = offset.distance();
            spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
            spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
            object.lookAt(this.target);
        };

        // Everything below here just updates panDelta and sphericalDelta
        // Using those two objects' values, the orbit is calculated

        const rotateStart = new Vec2();
        const panStart = new Vec2();
        const dollyStart = new Vec2();

        let state = STATE.NONE;
        this.mouseButtons = { ORBIT: 0, ZOOM: 1, PAN: 2 };

        function getZoomScale() {
            return Math.pow(0.95, zoomSpeed);
        }

        function panLeft(distance, m) {
            _tempVec3.set(m[0], m[1], m[2]);
            _tempVec3.multiply(-distance);
            panDelta.add(_tempVec3);
        }

        function panUp(distance, m) {
            _tempVec3.set(m[4], m[5], m[6]);
            _tempVec3.multiply(distance);
            panDelta.add(_tempVec3);
        }

        const pan = (deltaX, deltaY) => {
            let el = element === document ? document.body : element;
            _tempVec3.copy(object.position).sub(this.target);
            let targetDistance = _tempVec3.distance();
            targetDistance *= Math.tan((((object.fov || 45) / 2) * Math.PI) / 180.0);
            panLeft((2 * deltaX * targetDistance) / el.clientHeight, object.matrix);
            panUp((2 * deltaY * targetDistance) / el.clientHeight, object.matrix);
        };

        const dolly = (dollyScale) => {
            if (this.zoomStyle === 'dolly') sphericalDelta.radius /= dollyScale;
            else {
                object.fov /= dollyScale;
                if (object.type === 'orthographic') object.orthographic();
                else object.perspective();
            }
        };

        function handleAutoRotate() {
            const angle = ((2 * Math.PI) / 60 / 60) * autoRotateSpeed;
            sphericalDelta.theta -= angle;
        }

        function handleMoveRotate(x, y) {
            _tempVec2a.set(x, y);
            _tempVec2b.sub(_tempVec2a, rotateStart).multiply(rotateSpeed);
            let el = element === document ? document.body : element;
            sphericalDelta.theta -= (2 * Math.PI * _tempVec2b.x) / el.clientHeight;
            sphericalDelta.phi -= (2 * Math.PI * _tempVec2b.y) / el.clientHeight;
            rotateStart.copy(_tempVec2a);
        }

        function handleMouseMoveDolly(event) {
            _tempVec2a.set(event.clientX, event.clientY);
            _tempVec2b.sub(_tempVec2a, dollyStart);
            if (_tempVec2b.y > 0) {
                dolly(getZoomScale());
            } else if (_tempVec2b.y < 0) {
                dolly(1 / getZoomScale());
            }
            dollyStart.copy(_tempVec2a);
        }

        function handleMovePan(x, y) {
            _tempVec2a.set(x, y);
            _tempVec2b.sub(_tempVec2a, panStart).multiply(panSpeed);
            pan(_tempVec2b.x, _tempVec2b.y);
            panStart.copy(_tempVec2a);
        }

        function handleTouchStartDollyPan(event) {
            if (enableZoom) {
                let dx = event.touches[0].pageX - event.touches[1].pageX;
                let dy = event.touches[0].pageY - event.touches[1].pageY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                dollyStart.set(0, distance);
            }

            if (enablePan) {
                let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
                let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
                panStart.set(x, y);
            }
        }

        function handleTouchMoveDollyPan(event) {
            if (enableZoom) {
                let dx = event.touches[0].pageX - event.touches[1].pageX;
                let dy = event.touches[0].pageY - event.touches[1].pageY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                _tempVec2a.set(0, distance);
                _tempVec2b.set(0, Math.pow(_tempVec2a.y / dollyStart.y, zoomSpeed));
                dolly(_tempVec2b.y);
                dollyStart.copy(_tempVec2a);
            }

            if (enablePan) {
                let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
                let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
                handleMovePan(x, y);
            }
        }

        const onMouseDown = (event) => {
            if (! this.enabled) return;

            switch (event.button) {
                case this.mouseButtons.ORBIT:
                    if (enableRotate === false) return;
                    rotateStart.set(event.clientX, event.clientY);
                    state = STATE.ROTATE;
                    break;
                case this.mouseButtons.ZOOM:
                    if (enableZoom === false) return;
                    dollyStart.set(event.clientX, event.clientY);
                    state = STATE.DOLLY;
                    break;
                case this.mouseButtons.PAN:
                    if (enablePan === false) return;
                    panStart.set(event.clientX, event.clientY);
                    state = STATE.PAN;
                    break;
            }

            if (state !== STATE.NONE) {
                window.addEventListener('pointermove', onMouseMove, false);
                window.addEventListener('pointerup', onMouseUp, false);
            }
        };

        const onMouseMove = (event) => {
            if (! this.enabled) return;

            switch (state) {
                case STATE.ROTATE:
                    if (enableRotate === false) return;
                    handleMoveRotate(event.clientX, event.clientY);
                    break;
                case STATE.DOLLY:
                    if (enableZoom === false) return;
                    handleMouseMoveDolly(event);
                    break;
                case STATE.PAN:
                    if (enablePan === false) return;
                    handleMovePan(event.clientX, event.clientY);
                    break;
            }
        };

        const onMouseUp = () => {
            window.removeEventListener('pointermove', onMouseMove, false);
            window.removeEventListener('pointerup', onMouseUp, false);
            state = STATE.NONE;
        };

        const onMouseWheel = (event) => {
            if (!this.enabled || !enableZoom || (state !== STATE.NONE && state !== STATE.ROTATE)) return;
            event.stopPropagation();
            event.preventDefault();

            if (event.deltaY < 0) {
                dolly(1 / getZoomScale());
            } else if (event.deltaY > 0) {
                dolly(getZoomScale());
            }
        };

        const onTouchStart = (event) => {
            if (!this.enabled) return;
            event.preventDefault();

            switch (event.touches.length) {
                case 1:
                    if (enableRotate === false) return;
                    rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
                    state = STATE.ROTATE;
                    break;
                case 2:
                    if (enableZoom === false && enablePan === false) return;
                    handleTouchStartDollyPan(event);
                    state = STATE.DOLLY_PAN;
                    break;
                default:
                    state = STATE.NONE;
            }
        };

        const onTouchMove = (event) => {
            if (!this.enabled) return;
            event.preventDefault();
            event.stopPropagation();

            switch (event.touches.length) {
                case 1:
                    if (enableRotate === false) return;
                    handleMoveRotate(event.touches[0].pageX, event.touches[0].pageY);
                    break;
                case 2:
                    if (enableZoom === false && enablePan === false) return;
                    handleTouchMoveDollyPan(event);
                    break;
                default:
                    state = STATE.NONE;
            }
        };

        const onTouchEnd = () => {
            if (!this.enabled) return;
            state = STATE.NONE;
        };

        const onContextMenu = (event) => {
            if (!this.enabled) return;
            event.preventDefault();
        };

        function addHandlers() {
            element.addEventListener('contextmenu', onContextMenu, false);
            element.addEventListener('pointerdown', onMouseDown, false);
            element.addEventListener('wheel', onMouseWheel, { passive: false });
            element.addEventListener('touchstart', onTouchStart, { passive: false });
            element.addEventListener('touchend', onTouchEnd, false);
            element.addEventListener('touchmove', onTouchMove, { passive: false });
        }

        this.remove = function() {
            element.removeEventListener('contextmenu', onContextMenu);
            element.removeEventListener('pointerdown', onMouseDown);
            element.removeEventListener('wheel', onMouseWheel);
            element.removeEventListener('touchstart', onTouchStart);
            element.removeEventListener('touchend', onTouchEnd);
            element.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('pointermove', onMouseMove);
            window.removeEventListener('pointerup', onMouseUp);
        };

        addHandlers();

    }

}

class Plane extends Geometry {

    constructor({
        width = 1,
        height = 1,
        widthSegments = 1,
        heightSegments = 1,
        attributes = {}
    } = {}) {
        const wSegs = widthSegments;
        const hSegs = heightSegments;

        // Determine length of arrays
        const num = (wSegs + 1) * (hSegs + 1);
        const numIndices = wSegs * hSegs * 6;

        // Generate empty arrays once
        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = numIndices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);

        Object.assign(attributes, {
            position: { size: 3, data: position },
            normal: { size: 3, data: normal },
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        super(attributes);
    }

    static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = -1, vDir = -1, i = 0, ii = 0) {
        const io = i;
        const segW = width / wSegs;
        const segH = height / hSegs;

        for (let iy = 0; iy <= hSegs; iy++) {
            let y = iy * segH - height / 2;
            for (let ix = 0; ix <= wSegs; ix++, i++) {
                let x = ix * segW - width / 2;

                position[i * 3 + u] = x * uDir;
                position[i * 3 + v] = y * vDir;
                position[i * 3 + w] = depth / 2;

                normal[i * 3 + u] = 0;
                normal[i * 3 + v] = 0;
                normal[i * 3 + w] = depth >= 0 ? 1 : -1;

                uv[i * 2] = ix / wSegs;
                uv[i * 2 + 1] = 1 - iy / hSegs;

                if (iy === hSegs || ix === wSegs) continue;
                let a = io + ix + iy * (wSegs + 1);
                let b = io + ix + (iy + 1) * (wSegs + 1);
                let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
                let d = io + ix + iy * (wSegs + 1) + 1;

                index[ii * 6] = a;
                index[ii * 6 + 1] = b;
                index[ii * 6 + 2] = d;
                index[ii * 6 + 3] = b;
                index[ii * 6 + 4] = c;
                index[ii * 6 + 5] = d;
                ii++;
            }
        }
    }

}

class Box extends Geometry {

    constructor({
        width = 1,
        height = 1,
        depth = 1,
        widthSegments = 1,
        heightSegments = 1,
        depthSegments = 1,
        attributes = {}
    } = {}) {
        const wSegs = widthSegments;
        const hSegs = heightSegments;
        const dSegs = depthSegments;

        const num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
        const numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;

        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        let i = 0;
        let ii = 0;

        // left, right
        Plane.buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);
        i += (dSegs + 1) * (hSegs + 1);
        ii += dSegs * hSegs;
        Plane.buildPlane(position, normal, uv, index, depth, height, -width, dSegs, hSegs, 2, 1, 0, 1, -1, i, ii);
        i += (dSegs + 1) * (hSegs + 1);
        ii += dSegs * hSegs;

        // top, bottom
        Plane.buildPlane(position, normal, uv, index, width, depth, height, dSegs, wSegs, 0, 2, 1, 1, 1, i, ii);
        i += (wSegs + 1) * (dSegs + 1);
        ii += wSegs * dSegs;
        Plane.buildPlane(position, normal, uv, index, width, depth, -height, dSegs, wSegs, 0, 2, 1, 1, -1, i, ii);
        i += (wSegs + 1) * (dSegs + 1);
        ii += wSegs * dSegs;

        // front, back
        Plane.buildPlane(position, normal, uv, index, width, height, -depth, wSegs, hSegs, 0, 1, 2, -1, -1, i, ii);
        i += (wSegs + 1) * (hSegs + 1);
        ii += wSegs * hSegs;
        Plane.buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, 0, 1, 2, 1, -1, i, ii);

        Object.assign(attributes, {
            position: { size: 3, data: position },
            normal: { size: 3, data: normal },
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        super(attributes);
    }

}

class Cylinder extends Geometry {

    constructor({
        radiusTop = 0.5,
        radiusBottom = 0.5,
        height = 1,
        radialSegments = 8,
        heightSegments = 1,
        openEnded = false,
        thetaStart = 0,
        thetaLength = Math.PI * 2,
        attributes = {},
    } = {}) {
        const rSegs = radialSegments;
        const hSegs = heightSegments;
        const tStart = thetaStart;
        const tLength = thetaLength;

        const numCaps = openEnded ? 0 : radiusBottom && radiusTop ? 2 : 1;
        const num = (rSegs + 1) * (hSegs + 1 + numCaps) + numCaps;
        const numIndices = rSegs * hSegs * 6 + numCaps * rSegs * 3;

        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        let i = 0;
        let ii = 0;
        const indexArray = [];

        addHeight();
        if (!openEnded) {
            if (radiusTop) addCap(true);
            if (radiusBottom) addCap(false);
        }

        function addHeight() {
            let x, y;
            const n = new Vec3();
            const slope = (radiusBottom - radiusTop) / height;

            for (y = 0; y <= hSegs; y++) {
                const indexRow = [];
                const v = y / hSegs;

                const r = v * (radiusBottom - radiusTop) + radiusTop;
                for (x = 0; x <= rSegs; x++) {
                    const u = x / rSegs;
                    const theta = u * tLength + tStart;
                    const sinTheta = Math.sin(theta);
                    const cosTheta = Math.cos(theta);

                    position.set([ r * sinTheta, (0.5 - v) * height, r * cosTheta ], i * 3);
                    n.set(sinTheta, slope, cosTheta).normalize();
                    normal.set([ n.x, n.y, n.z ], i * 3);
                    uv.set([ u, 1 - v ], i * 2);
                    indexRow.push(i++);
                }
                indexArray.push(indexRow);
            }

            for (x = 0; x < rSegs; x++) {
                for (y = 0; y < hSegs; y++) {
                    const a = indexArray[y][x];
                    const b = indexArray[y + 1][x];
                    const c = indexArray[y + 1][x + 1];
                    const d = indexArray[y][x + 1];

                    index.set([ a, b, d, b, c, d ], ii * 3);
                    ii += 2;
                }
            }
        }

        function addCap(isTop) {
            let x;
            const r = isTop === true ? radiusTop : radiusBottom;
            const sign = isTop === true ? 1 : -1;

            const centerIndex = i;
            position.set([ 0, 0.5 * height * sign, 0 ], i * 3);
            normal.set([ 0, sign, 0 ], i * 3);
            uv.set([ 0.5, 0.5 ], i * 2);
            i++;

            for (x = 0; x <= rSegs; x++) {
                const u = x / rSegs;
                const theta = u * tLength + tStart;
                const cosTheta = Math.cos(theta);
                const sinTheta = Math.sin(theta);

                position.set([ r * sinTheta, 0.5 * height * sign, r * cosTheta ], i * 3);
                normal.set([ 0, sign, 0 ], i * 3);
                uv.set([ cosTheta * 0.5 + 0.5, sinTheta * 0.5 * sign + 0.5 ], i * 2);
                i++;
            }

            for (x = 0; x < rSegs; x++) {
                const j = centerIndex + x + 1;
                if (isTop) {
                    index.set([ j, j + 1, centerIndex ], ii * 3);
                } else {
                    index.set([ j + 1, j, centerIndex ], ii * 3);
                }
                ii++;
            }
        }

        Object.assign(attributes, {
            position: { size: 3, data: position },
            normal: { size: 3, data: normal },
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        super(attributes);
    }
}

class Sphere extends Geometry {

    constructor({
        radius = 0.5,
        widthSegments = 16,
        heightSegments = Math.ceil(widthSegments * 0.5),
        phiStart = 0,
        phiLength = Math.PI * 2,
        thetaStart = 0,
        thetaLength = Math.PI,
        attributes = {},
    } = {}) {
        const wSegs = widthSegments;
        const hSegs = heightSegments;
        const pStart = phiStart;
        const pLength = phiLength;
        const tStart = thetaStart;
        const tLength = thetaLength;

        const num = (wSegs + 1) * (hSegs + 1);
        const numIndices = wSegs * hSegs * 6;

        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        let i = 0;
        let iv = 0;
        let ii = 0;
        let te = tStart + tLength;
        const grid = [];

        let n = new Vec3();

        for (let iy = 0; iy <= hSegs; iy++) {
            let vRow = [];
            let v = iy / hSegs;
            for (let ix = 0; ix <= wSegs; ix++, i++) {
                let u = ix / wSegs;
                let x = -radius * Math.cos(pStart + u * pLength) * Math.sin(tStart + v * tLength);
                let y = radius * Math.cos(tStart + v * tLength);
                let z = radius * Math.sin(pStart + u * pLength) * Math.sin(tStart + v * tLength);

                position[i * 3] = x;
                position[i * 3 + 1] = y;
                position[i * 3 + 2] = z;

                n.set(x, y, z).normalize();
                normal[i * 3] = n.x;
                normal[i * 3 + 1] = n.y;
                normal[i * 3 + 2] = n.z;

                uv[i * 2] = u;
                uv[i * 2 + 1] = 1 - v;

                vRow.push(iv++);
            }

            grid.push(vRow);
        }

        for (let iy = 0; iy < hSegs; iy++) {
            for (let ix = 0; ix < wSegs; ix++) {
                let a = grid[iy][ix + 1];
                let b = grid[iy][ix];
                let c = grid[iy + 1][ix];
                let d = grid[iy + 1][ix + 1];

                if (iy !== 0 || tStart > 0) {
                    index[ii * 3] = a;
                    index[ii * 3 + 1] = b;
                    index[ii * 3 + 2] = d;
                    ii++;
                }
                if (iy !== hSegs - 1 || te < Math.PI) {
                    index[ii * 3] = b;
                    index[ii * 3 + 1] = c;
                    index[ii * 3 + 2] = d;
                    ii++;
                }
            }
        }

        Object.assign(attributes, {
            position: { size: 3, data: position },
            normal: { size: 3, data: normal },
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        super(attributes);
    }

}

// https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js

class Torus extends Geometry {

    constructor({
        radius = 0.5,
        tube = 0.2,
        radialSegments = 8,
        tubularSegments = 6,
        arc = Math.PI * 2,
        attributes = {}
    } = {}) {
        const num = (radialSegments + 1) * (tubularSegments + 1);
        const numIndices = radialSegments * tubularSegments * 6;

        const vertices = new Float32Array(num * 3);
        const normals = new Float32Array(num * 3);
        const uvs = new Float32Array(num * 2);
        const indices = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        const center = new Vec3();
        const vertex = new Vec3();
        const normal = new Vec3();

        // Generate vertices, normals and uvs
        let idx = 0;
        for (let j = 0; j <= radialSegments; j++) {
            for (let i = 0; i <= tubularSegments; i++, idx++) {
                const u = (i / tubularSegments) * arc;
                const v = (j / radialSegments) * Math.PI * 2;

                // vertex
                vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
                vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
                vertex.z = tube * Math.sin(v);
                vertices.set([ vertex.x, vertex.y, vertex.z ], idx * 3);

                // normal
                center.x = radius * Math.cos(u);
                center.y = radius * Math.sin(u);
                normal.sub(vertex, center).normalize();
                normals.set([ normal.x, normal.y, normal.z ], idx * 3);

                // uv
                uvs.set([ i / tubularSegments, j / radialSegments ], idx * 2);
            }
        }

        // Generate indices
        idx = 0;
        for (let j = 1; j <= radialSegments; j++) {
            for (let i = 1; i <= tubularSegments; i++) {
                // indices
                const a = (tubularSegments + 1) * j + i - 1;
                const b = (tubularSegments + 1) * (j - 1) + i - 1;
                const c = (tubularSegments + 1) * (j - 1) + i;
                const d = (tubularSegments + 1) * j + i;

                // faces
                indices.set([ a, b, d ], (idx * 6));
                indices.set([ b, c, d ], (idx * 6) + 3);

                idx++;
            }
        }

        Object.assign(attributes, {
            position: { size: 3, data: vertices },
            normal: { size: 3, data: normals },
            uv: { size: 2, data: uvs },
            index: { data: indices },
        });

        super(attributes);
    }

}

class Vec4 extends Array {

    constructor(x = 0, y = x, z = x, w = x) {
        super(x, y, z, w);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    get w() {
        return this[3];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set z(v) {
        this[2] = v;
    }

    set w(v) {
        this[3] = v;
    }

    set(x, y, z, w) {
        if (x.length) return this.copy(x);
        set$4(this, x, y, z, w);
        return this;
    }

    copy(v) {
        copy$4(this, v);
        return this;
    }

    normalize() {
        normalize$2(this, this);
        return this;
    }

    multiply(v) {
        scale$4(this, this, v);
        return this;
    }

    dot(v) {
        return dot$2(this, v);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        return a;
    }

    log(description = '') {
        if (description !== '') description += ' - ';
        console.log(`${description}X: ${this.x}, Y: ${this.y}, Z: ${this.z}, W: ${this.w}`);
    }

}

class InstancedMesh extends Mesh {

    constructor(...args) {
        super(...args);

        // Skip renderer frustum culling
        this.frustumCulled = false;
        this.isInstancedMesh = true;
    }

    addFrustumCull() {
        this.instanceTransforms = null;
        this.instanceLightmapScaleOffset = null;
        this.totalInstanceCount = 0;
        this.frustumCullFunction = null;
        this.instanceRenderList = null;

        // Get instanced mesh
        if (! this.geometry.attributes.instanceMatrix) {
            const name = this.name ?? '';
            console.error(`InstanceMesh.addFrustumCull: Mesh "${name}" missing instanceMatrix attribute, unable to frustum cull`);
        }

        // Make list of transforms from instanceMatrix
        const matrixData = this.geometry.attributes.instanceMatrix.data;
        this.instanceTransforms = [];
        for (let i = 0, j = 0; i < matrixData.length; i += 16, j++) {
            const transform = new Transform();
            transform.index = j;
            transform.matrix.fromArray(matrixData, i);
            transform.decompose();
            this.instanceTransforms.push(transform);
            // Add transforms to parent to update world matrices
            transform.setParent(this.parent);
        }
        this.totalInstanceCount = this.instanceTransforms.length;

        // Check for lightmap attributes - attach to transform
        if (!!this.geometry.attributes.lightmapScaleOffset) {
            const lightmapData = this.geometry.attributes.lightmapScaleOffset.data;
            for (let i = 0, j = 0; i < lightmapData.length; i += 4, j++) {
                this.instanceTransforms[j].lightmapData = new Vec4().fromArray(lightmapData, i);
            }
        }

        this.frustumCullFunction = ({ camera }) => {
            // Frustum cull transforms each frame - pass world matrix
            this.instanceRenderList = [];
            this.instanceTransforms.forEach((transform) => {
                if (! camera.frustumIntersectsMesh(this, transform.worldMatrix)) return;
                this.instanceRenderList.push(transform);
            });

            // Update instanceMatrix and instancedCount with visible
            this.instanceRenderList.forEach((transform, i) => {
                transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i * 16);

                // Update lightmap attr
                if (transform.lightmapData) {
                    transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i * 4);
                    this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
                }
            });
            this.geometry.instancedCount = this.instanceRenderList.length;
            this.geometry.attributes.instanceMatrix.needsUpdate = true;
        };

        this.onBeforeRender(this.frustumCullFunction);
    }

    removeFrustumCull() {
        this.offBeforeRender(this.frustumCullFunction);
        this.geometry.instancedCount = this.totalInstanceCount;
        this.instanceTransforms.forEach((transform, i) => {
            transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i * 16);

            // Update lightmap attribute
            if (transform.lightmapData) {
                transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i * 4);
                this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
            }
        });
        this.geometry.attributes.instanceMatrix.needsUpdate = true;
    }
}

class WireMesh extends Mesh {

    constructor({
        geometry,
        wireColor = new Vec3(0, 0.75, 0.5),
        wireTint = 1.0,
        ...meshProps
    } = {}) {
        const wireProgram = new Program({
            vertex,
            fragment,
            uniforms: {
                wireColor: { value: wireColor },
                wireTint: { value: wireTint }
            },
        });

        const positionArray = geometry.attributes.position.data;
        const indices = [];
        const hashSet = new Set();

        function addUniqueIndices(idx) {
            for (let i = 0; i < idx.length; i += 2) {
                if (isUniqueEdgePosition(idx[i] * 3, idx[i + 1] * 3, positionArray, hashSet)) {
                    indices.push(idx[i], idx[i + 1]);
                }
            }
        }

        if (geometry.attributes.index) {
            const idata = geometry.attributes.index.data;

            for (let i = 0; i < idata.length; i += 3) {
                // For every triangle, make three line pairs (start, end)
                addUniqueIndices([
                    idata[i], idata[i + 1],
                    idata[i + 1], idata[i + 2],
                    idata[i + 2], idata[i]
                ]);
            }
        } else {
            const numVertices = Math.floor(positionArray.length / 3);

            for (let i = 0; i < numVertices; i += 3) {
                addUniqueIndices([i, i + 1, i + 1, i + 2, i + 2, i]);
            }
        }

        const indicesTyped = indices.length > 65536 ? new Uint32Array(indices) : new Uint16Array(indices);
        const wireGeometry = new Geometry({
            position: { ...geometry.attributes.position },
            index: { data: indicesTyped },
        });

        super({
            ...meshProps,
            mode: renderer.gl.LINES,
            geometry: wireGeometry,
            program: wireProgram
        });
    }

}

/***** Internal *****/

// https://github.com/mrdoob/three.js/blob/0c26bb4bb8220126447c8373154ac045588441de/src/geometries/WireframeGeometry.js#L116
function isUniqueEdgePosition(start, end, pos, hashSet) {
    const hash1 = [
        pos[start], pos[start + 1], pos[start + 2],
        pos[end], pos[end + 1], pos[end + 2]
    ].join('#');

    // coincident edge
    const hash2 = [
        pos[end], pos[end + 1], pos[end + 2],
        pos[start], pos[start + 1], pos[start + 2]
    ].join('#');

    const oldSize = hashSet.size;
    hashSet.add(hash1);
    hashSet.add(hash2);
    return hashSet.size - oldSize === 2;
}

const vertex = /* glsl */ `
    attribute vec3 position;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    uniform vec3 wireColor;

    void main() {
        gl_FragColor = vec4(wireColor, 1.0);
    }
`;

/**
 * fuzzyFloat()
 * isPowerOf2()
 * triangleArea()
 */

/**
 * Compares two decimal numbers to see if they're almost the same
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} tolerance
 * @returns {Boolean}
 */
function fuzzyFloat(a, b, tolerance = 0.001) {
    return ((a < (b + tolerance)) && (a > (b - tolerance)));
}

/**
 * Determins if value is a power of 2
 *
 * @param {Number} value number to check
 * @returns {Boolean} is value power of 2?
 */
function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}

/**
 * Computes the area of a triangle defined by 3 points (points as arrays [x, y, z])
 *
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Vec3} c
 * @returns {Number} area of the triangle
 */
const triangleArea = (function() {
    const v0 = [ 0, 0, 0 ];
    const v1 = [ 0, 0, 0 ];
    const vc = [ 0, 0, 0 ];

    return function(a, b, c) {
        subtract$3(v0, c, b);
        subtract$3(v1, a, b);
        cross$1(vc, v0, v1);
        return (length$3(vc) * 0.5);
    };
})();

var MathUtils$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fuzzyFloat: fuzzyFloat,
    isPowerOf2: isPowerOf2,
    triangleArea: triangleArea
});

/**
 * cleanAttributes()
 * computeVertexNormals()
 * toNonIndexed()
 */

const EPSILON = 0.000001;
const POSITION_DECIMALS = 6;
const POSITION_SHIFT = Math.pow(10, POSITION_DECIMALS);

/**
 * Cleans up geometry attributes:
 * - removes zero size triangles
 * - remove duplicate positions from indexed geometry
 *
 * @param {Geometry} geometry
 */
function cleanAttributes(geometry) {

    // Temp Variables
    const pA = new Vec3(), pB = new Vec3(), pC = new Vec3();
    const vA = new Vec3(), vB = new Vec3(), vC = new Vec3();

    // Remove zero sized triangles
    if (geometry.attributes.position) {
        const removeIndices = [];
        const positions = geometry.attributes.position.data;
        for (let i = 0; i < positions.length; i += 9) {
            const index = i / 3;
            pA.fromArray(positions, i);
            pB.fromArray(positions, i + 3);
            pC.fromArray(positions, i + 6);
            const area = triangleArea(pA, pB, pC);
            console.log(area);
            if (fuzzyFloat(area, 0.0, EPSILON)) {
                removeIndices.push(index, index + 1, index + 2);
            }
        }
        removeIndexValues(geometry, removeIndices, false /* shiftIndex */);
    }
}

/**
 * Calculates vertex normals based on position triangles
 *
 * @param {Geometry} geometry
 */
function computeVertexNormals(geometry) {
    const positionAttribute = geometry.getPosition();
    if (! positionAttribute) return;

    const positions = positionAttribute.data;
    const normals = new Float32Array(positions.length);
    const countHashes = {};
    const positionNormals = {};

    // Temp Vec3s
    const pA = new Vec3(), pB = new Vec3(), pC = new Vec3();
    const nA = new Vec3(), nB = new Vec3(), nC = new Vec3();
    const cb = new Vec3();

    // Adds position hash to counter
    function addPositionHashes(position, normal) {
        const hash = hashFromVector(position);

        if (! countHashes[hash]) countHashes[hash] = 0;
        countHashes[hash]++;

        if (! positionNormals[hash]) positionNormals[hash] = new Vec3();
        positionNormals[hash].add(normal);
    }

    // Indexed, need to calculate smooth normals
    if (geometry.attributes.index) {
        const indices = geometry.attributes.index.data;

        // Calculate normals for each triangle
        for (let i = 0; i < indices.length; i += 3) {
            const idx0 = indices[i + 0] * 3;
            const idx1 = indices[i + 1] * 3;
            const idx2 = indices[i + 2] * 3;
            pA.fromArray(positions, idx0);
            pB.fromArray(positions, idx1);
            pC.fromArray(positions, idx2);
            calculateNormal(cb, pA, pB, pC);
            addPositionHashes(pA, cb);
            addPositionHashes(pB, cb);
            addPositionHashes(pC, cb);
        }

        // Divide normals by index counts
        for (const hash in countHashes) {
            positionNormals[hash].divide(countHashes[hash]).normalize();
        }

        // Set normals by position
        for (let i = 0; i < normals.length; i += 3) {
            pA.fromArray(positions, i);
            const hash = hashFromVector(pA);
            normals.set(positionNormals[hash], i);
        }

    // Non indexed, unique flat normal for each triangle
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
    if (geometry.attributes.normal) {
        geometry.attributes.normal.data = normals;
        geometry.attributes.normal.needsUpdate = true;
    // Add attribute
    } else {
        geometry.addAttribute('normal', { size: 3, data: normals });
    }
}

/**
 * Converts geometry from non indexed to indexed, vertices that share data will be collapsed
 *
 * @param {Geometry} geometry
 * @param {Array} ignoreAttributes attributes to ignore during vertex comparison (e.g. 'normal', 'uv', etc)
 */
function toIndexed(geometry, ignoreAttributes = []) {
    const positionAttribute = geometry.getPosition();
    if (! positionAttribute) return;
    if (geometry.attributes.index) toNonIndexed(geometry);

    const attributes = geometry.attributes;
    const positions = attributes.position.data;
    const indices = [];
    const arrays = {};
    const keys = [];
    for (const key in attributes) {
        arrays[key] = [];
        if (! ignoreAttributes.includes(key) || key === 'position') keys.push(key);
    }

    // Process vertices
    for (let i = 0; i < positions.length; i += 3) {
        const currentIndex = i / 3;

        // Check if exists
        let foundVertex = -1;
        for (let idx = 0; idx < indices.length; idx++) {
            for (const key of keys) {
                let matchingKey = true;

                // Current values of attributes[key], compared to stored index values
                const attribute = attributes[key];
                for (let j = 0; j < attributes[key].size; j++) {
                    let current = attribute.data[(currentIndex * attribute.size) + j];
                    let compare = arrays[key][(indices[idx] * attribute.size) + j];
                    if (! fuzzyFloat(current, compare, 0.0001)) {//EPSILON)) {
                        matchingKey = false;
                        break;
                    }
                }

                if (matchingKey) {
                    foundVertex = idx;
                } else {
                    foundVertex = -1;
                    break;
                }
            }

            if (foundVertex !== -1) break;
        }

        // Add Vertex
        if (foundVertex === -1) {
            for (const attributeName in attributes) {
                const attribute = attributes[attributeName];
                for (let j = 0; j < attribute.size; j++) {
                    const current = attribute.data[(currentIndex * attribute.size) + j];
                    arrays[attributeName].push(current);
                }
            }
            indices.push((arrays['position'].length / 3) - 1);
        } else {
            indices.push(indices[foundVertex]);
        }
    };

    // Replace non indexed attributes with new, indexed attributes
    for (const attributeName in attributes) {
        if (attributeName === 'index') continue;
        const attribute = attributes[attributeName];
        const itemSize = attribute.size;
        const newAttribute = {
            size: itemSize,
            data: new attribute.data.constructor(arrays[attributeName])
        };
        geometry.deleteAttribute(attribute);
        geometry.addAttribute(attributeName, newAttribute);
    }

    // Add index attribute
    const indexData = (indices > 65536) ? new Uint32Array(indices) : new Uint16Array(indices);
    geometry.addAttribute('index', { data: indexData });
}

/**
 * Converts geometry from indexed to non indexed
 *
 * @param {Geometry} geometry
 * @returns non-indexed geometry
 */
function toNonIndexed(geometry) {
    if (! geometry.attributes.index) toIndexed(geometry);

    function convertBufferAttribute(attribute, indices) {
        const itemSize = attribute.size;
        const array = attribute.data;
        const array2 = new array.constructor(indices.length * itemSize);
        let index = 0;
        let index2 = 0;
        for (let i = 0; i < indices.length; i++) {
            index = indices[i] * itemSize;
            for (let j = 0; j < itemSize; j++) {
                array2[index2++] = array[index++];
            }
        }
        return array2;
    }

    const indices = geometry.attributes.index.data;
    const attributes = geometry.attributes;
    for (const attributeName in attributes) {
        if (attributeName === 'index') continue;
        const attribute = attributes[attributeName];
        const newAttribute = { size: attribute.size, data: convertBufferAttribute(attribute, indices) };
        geometry.deleteAttribute(attribute);
        geometry.addAttribute(attributeName, newAttribute);
    }
    geometry.deleteAttribute(geometry.attributes.index);
}

/***** Internal ******/

/**
 * Remove values (by index) from geometry.attributes
 *
 * @param {Geometry} geometry geometry to remove indices from
 * @param {Array} removeIndices array of integer index values to remove
 * @param {Boolean} shiftIndex should we shift index values? otherwise they will be removed
 * @returns
 */
function removeIndexValues(geometry, removeIndices = [], shiftIndex = false) {
    if (removeIndices.length === 0) return;
    for (const attributeName in geometry.attributes) {
        const attribute = geometry.attributes[attributeName];
        // Shift index values instead of remove
        if (attributeName === 'index' && shiftIndex) {
            for (let i = 0; i < removeIndices.length; i++) {
                const index = removeIndices[i];
                // Shift indices
                for (let j = 0; j < attribute.data.length; j++) {
                    if (attribute.data[j] >= index) attribute.data[j] -= 1;
                }
                // Shift removal indices
                for (let j = i + 1; j < removeIndices.length; j++) removeIndices[j] -= 1;
            }
        // Build new data array, only include un-skipped index values
        } else {
            const array2 = [];
            for (let i = 0; i < attribute.data.length; i += attribute.size) {
                if (removeIndices.includes(i / attribute.size)) continue;
                for (let j = 0; j < attribute.size; j++) array2.push(attribute.data[i + j]);
            }
            attribute.data = new attribute.data.constructor(array2);
        }
        attribute.needsUpdate = true;
    }
}

/**
 * Generates hash string from Number
 *
 * @param {*} num
 * @param {*} shift
 * @returns
 */
function hashFromNumber(num, shift = POSITION_SHIFT) {
    let roundedNumber = round(num * shift);
    if (roundedNumber == 0) roundedNumber = 0; /* prevent -0 (signed 0 can effect Math.atan2(), etc.) */
    return `${roundedNumber}`;
}

/**
 * Generates hash string from Vector3
 *
 * @param {Vec3} vector
 * @param {*} shift
 * @returns
 */
function hashFromVector(vector, shift = POSITION_SHIFT) {
    return `${hashFromNumber(vector[0], shift)},${hashFromNumber(vector[1], shift)},${hashFromNumber(vector[2], shift)}`;
}

/**
 * Rounds x to integer
 *
 * @param {Number} x
 * @returns
 */
function round(x) {
    return (x + ((x > 0) ? 0.5 : -0.5)) << 0;
}

var GeomUtils$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    cleanAttributes: cleanAttributes,
    computeVertexNormals: computeVertexNormals,
    toIndexed: toIndexed,
    toNonIndexed: toNonIndexed
});

/**
 * @description EyeGL
 * @about       Fast WebGL 2 graphics library built for games.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2022-2023 Stephens Nunnally and Scidian Studios
 * @source      https://github.com/onsightengine/eyegl
 */

/***** Unused *****/

// export { Curve } from './extras/Curve.js';
// export { Path } from './extras/Path/Path.js';
// export { Skin } from './extras/Skin.js';
// export { Animation } from './extras/Animation.js';
// export { Text } from './extras/Text.js';
// export { NormalProgram } from './extras/NormalProgram.js';
// export { Flowmap } from './extras/Flowmap.js';
// export { GPGPU } from './extras/GPGPU.js';
// export { Polyline } from './extras/Polyline.js';
// export { Shadow } from './extras/Shadow.js';
// export { KTXTexture } from './extras/KTXTexture.js';
// export { TextureLoader } from './extras/TextureLoader.js';
// export { GLTFLoader } from './extras/GLTFLoader.js';
// export { GLTFSkin } from './extras/GLTFSkin.js';
// export { BasisManager } from './extras/BasisManager.js';
// export { AxesHelper } from './extras/helpers/AxesHelper.js';
// export { GridHelper } from './extras/helpers/GridHelper.js';
// export { VertexNormalsHelper } from './extras/helpers/VertexNormalsHelper.js';
// export { FaceNormalsHelper } from './extras/helpers/FaceNormalsHelper.js';

export { Box, Camera, Capabilities, Color, ColorFunc$1 as ColorFunc, Cylinder, Euler, EulerFunc$1 as EulerFunc, Extensions, GeomUtils$1 as GeomUtils, Geometry, InstancedMesh, Mat3, Mat3Func$1 as Mat3Func, Mat4, Mat4Func$1 as Mat4Func, MathUtils$1 as MathUtils, Mesh, MeshProgram, Orbit, Plane, Post, Program, Quat, QuatFunc$1 as QuatFunc, Raycast, RenderTarget, Renderer, Sphere, Texture, Torus, Transform, Triangle, Vec2, Vec2Func$1 as Vec2Func, Vec3, Vec3Func$1 as Vec3Func, Vec4, Vec4Func$1 as Vec4Func, WireMesh };
