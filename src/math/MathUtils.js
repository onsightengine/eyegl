/**
 * Determins if value is a power of 2
 *
 * @param {Number} value number to check
 * @returns {Boolean} is value power of 2?
 */
export function isPowerOf2(value) {
    return (value & (value - 1)) === 0;
}
