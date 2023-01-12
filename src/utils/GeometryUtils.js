//
//  Geometry Utils
//      cleanAttributes
//      toNonIndexed
//

import { Geometry } from '../core/Geometry.js';
import { Vec3 } from '../math/Vec3.js';
import { fuzzyFloat, triangleArea } from '../math/MathUtils.js';

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
        console.warn('GeometryUtils.toNonIndexed: Geometry is already non-indexed.');
        //
        // TODO: Need return geometry.clone();
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
