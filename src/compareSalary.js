/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
    const salaries = [firstSalary, secondSalary, thirdSalary]
    const min1 = Math.min(...salaries)
    const max1 = Math.max(...salaries)
    return max1 - min1
};
