/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function (from, to) {
    const result = [];
    const upNum = Math.min(to, highestNumber);
    for (let num = from; num <= upNum; num++) {
      if (isPrime(num)) {
        result.push(num);
      }
    }
    return result;

    function isPrime(n) {
    for (let i = 2; i ** 2 <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  };
};