//
//  Geometry Utils
//      cleanAttributes
//      toNonIndexed
//

import { Geometry } from '../core/Geometry.js';
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

    if (geometry.attributes.position) {
        const positions = geometry.attributes.position.data;

        const pA = [ 0, 0, 0 ], pB = [ 0, 0, 0 ], pC = [ 0, 0, 0 ];
        const keepIndices = [];

        // Indexed
        if (geometry.attributes.index) {

        // Non Indexed
        } else {
            for (let i = 0; i < positions.length; i += 9) {
                pA[0] = positions[i + 0]; pA[1] = positions[i + 1]; pA[2] = positions[i + 2];
                pB[0] = positions[i + 3]; pB[1] = positions[i + 4]; pB[2] = positions[i + 5];
                pC[0] = positions[i + 6]; pC[1] = positions[i + 7]; pC[2] = positions[i + 8];
                const area = triangleArea(pA, pB, pC);
                if (! fuzzyFloat(area, 0.0, EPSILON)) {
                    keepIndices.push(i + 0);
                    keepIndices.push(i + 3);
                    keepIndices.push(i + 6);
                }
            }
        }

        // Remove zero sized triangles from geometry

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
