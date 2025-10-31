/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const num1 = String(firstNumber).split(" ").join("");
  const num2 = String(secondNumber).split(" ").join("");
  return Number(num1) + Number(num2)
};
