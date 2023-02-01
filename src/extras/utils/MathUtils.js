import * as Vec3Func from '../../math/functions/Vec3Func.js';

// fuzzyFloat()
// isPowerOf2()
// triangleArea()
// uuid()

/**
 * Compares two decimal numbers to see if they're almost the same
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} tolerance
 * @returns {Boolean}
 */
export function fuzzyFloat(a, b, tolerance = 0.001) {
    return ((a < (b + tolerance)) && (a > (b - tolerance)));
}

/**
 * Determins if value is a power of 2
 *
 * @param {Number} value number to check
 * @returns {Boolean} is value power of 2?
 */
export function isPowerOf2(value) {
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
export const triangleArea = (function() {
    const v0 = [ 0, 0, 0 ];
    const v1 = [ 0, 0, 0 ];
    const vc = [ 0, 0, 0 ];

    return function(a, b, c) {
        Vec3Func.subtract(v0, c, b);
        Vec3Func.subtract(v1, a, b);
        Vec3Func.cross(vc, v0, v1);
        return (Vec3Func.length(vc) * 0.5);
    };
})();

/**
 * Returns randomized UUID
 *
 * @returns {String} randomized UUID
 */
export function uuid() {
    if (window.crypto && window.crypto.randomUUID) return crypto.randomUUID();

    // https://github.com/mrdoob/three.js/blob/dev/src/math/MathUtils.js
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;
    const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
        _lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
        _lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
        _lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];
    return uuid.toLowerCase(); // .toLowerCase() flattens concatenated strings to save heap memory space
}
