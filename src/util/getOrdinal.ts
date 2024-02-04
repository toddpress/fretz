/**
 * Returns the ordinal representation of a number.
 * @param {number | string} n - The number to convert to an ordinal. Can be a number or a numeric string.
 * @returns {string} The ordinal representation of the input number.
 *
 * @example
 * getOrdinal(1); // returns '1st'
 * getOrdinal('23'); // returns '23rd'
 *
 * @see https://leancrew.com/all-this/2020/06/ordinal-numerals-and-javascript/
 */
export function getOrdinal(n: number | string): string {
    const num = typeof n === 'string' ? parseInt(n, 10) : n
    const s = ['th', 'st', 'nd', 'rd']
    const v = num % 100
    return num + (s[(v - 20) % 10] || s[v] || s[0])
}
