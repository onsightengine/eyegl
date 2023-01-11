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
 * Need to:
 * - remove zero size triangles
 * - remove duplicate positions from
 *
 * @param {Geometry} geometry
 */
export function cleanAttributes(geometry) {

    // Remove zero sized triangles
    if (geometry.attributes.position) {
        const positions = geometry.attributes.position.data;

        const pA = new Vec3();
        const pB = new Vec3();
        const pC = new Vec3();
        const removeIndices = [];

        // Indexed
        if (geometry.attributes.index) {

        // Non Indexed
        } else {
            for (let i = 0; i < positions.length; i += 9) {
                pA.fromArray(positions, i + 0);
                pB.fromArray(positions, i + 3);
                pC.fromArray(positions, i + 6);
                const area = triangleArea(pA, pB, pC);
                if (fuzzyFloat(area, 0.0, EPSILON)) {
                    removeIndices.push(i + 0);
                    removeIndices.push(i + 3);
                    removeIndices.push(i + 6);
                }
            }
        }

        // Rebuild attributes without zero sized triangles
        if (removeIndices.length > 0) {
            const attributes = geometry.attributes;
            for (const attributeName in attributes) {
                const attribute = attributes[attributeName];
                const array2 = [];

                // Create new arrays without invalid triangles
                if (attributeName === 'index') {
                    for (let i = 0; i < attribute.data.length; i++) {
                        let index = attribute.data[i];
                        if (! removeIndices.includes(index)) {
                            array2.push(index);
                        }
                    }
                } else {
                    for (let i = 0; i < attribute.data.length; i += attribute.size) {
                        let index = i / attribute.size;
                        if (! removeIndices.includes(index)) {
                            for (let j = 0; j < attribute.size; j++) {
                                array2.push(attribute.data[i + j]);
                            }
                        }
                    }
                }

                // Update attribute arrays
                const newData = new attribute.data.constructor(array2);
                attribute.data = newData;
                attribute.needsUpdate = true;
            }
        }
    }

}

/**
 *
 *
 * @param {Geometry} geometry
 * @returns
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
        return geometry;
    }

    const indices = geometry.attributes.index.data;
    const attributes = geometry.attributes;
    const nonIndexedGeometry = new Geometry();

    // Attributes
    for (const attributeName in attributes) {
        if (attributeName === 'index') continue;
        const attribute = attributes[attributeName];
        const newAttribute = { size: attribute.size, data: convertBufferAttribute(attribute, indices) };
        nonIndexedGeometry.addAttribute(attributeName, newAttribute);
    }

    return nonIndexedGeometry;
}
