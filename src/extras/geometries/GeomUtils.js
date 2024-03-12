// cleanAttributes()
// computeVertexNormals()
// toIndexed()
// toNonIndexed()

// TODO: mergeGeometries()

import { Geometry } from '../../core/Geometry.js';
import { Vec3 } from '../../math/Vec3.js';
import { calculateNormal } from '../../math/functions/Vec3Func.js';
import { fuzzyFloat, triangleArea } from '../../math/MathUtils.js';

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
export function cleanAttributes(geometry) {

    // Temp Variables
    const pA = new Vec3(), pB = new Vec3(), pC = new Vec3();
    const vA = new Vec3(), vB = new Vec3(), vC = new Vec3();

    // Remove zero sized triangles
    if (geometry.attributes.position) {
        // Indexed
        if (geometry.attributes.index) {
            const removeIndices = [];
            const indices = geometry.attributes.index.data;
            const positions = geometry.attributes.position.data;
            for (let i = 0; i < indices.length; i += 3) {
                pA.fromArray(positions, indices[i + 0] * 3);
                pB.fromArray(positions, indices[i + 1] * 3);
                pC.fromArray(positions, indices[i + 2] * 3);
                const area = triangleArea(pA, pB, pC);
                if (fuzzyFloat(area, 0.0, EPSILON)) removeIndices.push(i, i + 1, i + 2);
            }
            removeIndexValues(geometry, removeIndices);

        // Non indexed
        } else {
            const removeIndices = [];
            const positions = geometry.attributes.position.data;
            for (let i = 0; i < positions.length; i += 9) {
                const index = i / 3;
                pA.fromArray(positions, i);
                pB.fromArray(positions, i + 3);
                pC.fromArray(positions, i + 6);
                const area = triangleArea(pA, pB, pC);
                if (fuzzyFloat(area, 0.0, EPSILON)) removeIndices.push(index, index + 1, index + 2);
            }
            removeIndexValues(geometry, removeIndices);
        }
    }
}

/**
 * Calculates vertex normals based on position triangles
 *
 * @param {Geometry} geometry
 */
export function computeVertexNormals(geometry) {
    const positionAttribute = geometry.getPosition();
    if (!positionAttribute) return;

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

        if (!countHashes[hash]) countHashes[hash] = 0;
        countHashes[hash]++;

        if (!positionNormals[hash]) positionNormals[hash] = new Vec3();
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
export function toIndexed(geometry, ignoreAttributes = []) {
    const positionAttribute = geometry.getPosition();
    if (!positionAttribute) return;
    if (geometry.attributes.index) toNonIndexed(geometry);

    const attributes = geometry.attributes;
    const positions = attributes.position.data;
    const indices = [];
    const arrays = {};
    const keys = [];
    for (const key in attributes) {
        arrays[key] = [];
        if (!ignoreAttributes.includes(key) || key === 'position') keys.push(key);
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
                    if (!fuzzyFloat(current, compare, 0.0001)) {//EPSILON)) {
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
export function toNonIndexed(geometry) {
    if (!geometry.attributes.index) toIndexed(geometry);

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

/******************** INTERNAL ********************/

/**
 * Remove values (by index) from geometry.attributes
 *
 * @param {Geometry} geometry geometry to remove indices from
 * @param {Array} removeIndices array of integer index values to remove
 * @returns
 */
function removeIndexValues(geometry, removeIndices = []) {
    if (removeIndices.length === 0) return;

    // Indexed (remove index only)
    if (geometry.attributes.index) {
        const attribute = geometry.attributes.index;
        const array2 = [];
        for (let i = 0; i < attribute.data.length; i++) {
            if (removeIndices.includes(i)) continue;
            array2.push(attribute.data[i]);
        }
        attribute.data = new attribute.data.constructor(array2);
        attribute.needsUpdate = true;

    // Non indexed (remove all attributes at index)
    } else {
        // Build new data array, only include un-skipped index values
        for (const attributeName in geometry.attributes) {
            const attribute = geometry.attributes[attributeName];
            const array2 = [];
            for (let i = 0; i < attribute.data.length; i += attribute.size) {
                if (removeIndices.includes(i / attribute.size)) continue;
                for (let j = 0; j < attribute.size; j++) array2.push(attribute.data[i + j]);
            }
            attribute.data = new attribute.data.constructor(array2);
            attribute.needsUpdate = true;
        }
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
