/**
 * cleanAttributes()
 * computeVertexNormals()
 * toNonIndexed()
 */

import { Geometry } from '../core/Geometry.js';
import { Vec3 } from '../math/Vec3.js';
import { calculateNormal } from '../math/functions/Vec3Func.js';
import { fuzzyFloat, triangleArea } from './MathUtils.js';

const EPSILON = 0.000001;

/**
 * Cleans up geometry attributes:
 * - removes zero size triangles
 * - remove duplicate positions from indexed geometry
 *
 * @param {Geometry} geometry
 */
export function cleanAttributes(geometry) {
    /**
     * Remove values from geometry.attributes, values are from indices listed in 'removeIndices'
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
                    for (let j = 0; j < attribute.data.length; j++) {
                        if (attribute.data[j] >= index) attribute.data[j] -= 1;
                    }
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
            if (fuzzyFloat(triangleArea(pA, pB, pC), 0.0, EPSILON)) {
                removeIndices.push(index, index + 1, index + 2);
            }
        }
        removeIndexValues(geometry, removeIndices, false /* shiftIndex */);
    }

    // Combine duplicate positions on indexed geometry
    if (geometry.attributes.index && geometry.attributes.position) {
        const removeIndices = [];
        const indices = geometry.attributes.index.data;
        const positions = geometry.attributes.position.data;
        // Process all index values, look for an earlier duplicate positions
        for (let i = 0; i < indices.length; i++) {
            let currentIndex = indices[i];
            pA.fromArray(positions, currentIndex * 3);
            for (let j = 0; j < positions.length; j += 3) {
                let newIndex = j / 3;
                if (newIndex < currentIndex) {
                    pB.fromArray(positions, newIndex * 3);
                    if (pA.fuzzyEquals(pB, 0.0001)) {
                        indices[i] = newIndex;
                        if (! removeIndices.includes(currentIndex)) removeIndices.push(currentIndex);
                        break;
                    }
                }
            }
        }
        removeIndexValues(geometry, removeIndices, true /* shiftIndex */);
    }
}

export function computeVertexNormals(geometry) {
    const positionAttribute = geometry.getPosition();
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

    // Indexed, need to calculate smooth normals
    if (geometry.attributes.index) {
        const indices = geometry.attributes.index.data;
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
 * Creates a new Geometry that is an unindexed version of 'geometry'
 * NOTE: Does not clean up / dispose (geometry.remove) original geometry
 *
 * @param {Geometry} geometry
 * @returns non-indexed geometry
 */
export function toNonIndexed(geometry) {
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

    if (! geometry.attributes.index) {
        console.warn('GeomUtils.toNonIndexed: Geometry is already non-indexed.');
        //
        // TODO: Need return geometry.clone(), OR, better yet, operate on geometry in place
        //
        return geometry;
    }

    const indices = geometry.attributes.index.data;
    const attributes = geometry.attributes;
    const nonIndexed = new Geometry();

    // Attributes
    for (const attributeName in attributes) {
        if (attributeName === 'index') continue;
        const attribute = attributes[attributeName];
        const newAttribute = { size: attribute.size, data: convertBufferAttribute(attribute, indices) };
        nonIndexed.addAttribute(attributeName, newAttribute);
    }

    return nonIndexed;
}
