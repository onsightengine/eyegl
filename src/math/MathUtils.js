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
