/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
    let sum = 0;
    const min = Math.min(Number(start), Number(end));
    const max = Math.max(Number(start), Number(end));

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}