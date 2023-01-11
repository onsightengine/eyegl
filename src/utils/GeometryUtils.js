//
//  Geometry Utils
//      cleanAttributes
//      toNonIndexed
//

import { Geometry } from '../core/Geometry.js';

/**
 * Need to:
 * - remove zero size triangles
 * - remove duplicate positions from
 *
 * @param {Geometry} geometry
 */
export function cleanAttributes(geometry) {

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
