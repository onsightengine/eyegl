//
//  MathUtils
//      General
//          fuzzyFloat
//          isPowerOf2
//      2D Geometry
//          triangleArea
//

import { Vec3 } from './Vec3.js';
import * as Vec3Func from './functions/Vec3Func.js';

//////////////////// General

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

//////////////////// 2D Geometry

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
