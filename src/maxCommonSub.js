/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxLength = 0;
  let maxSubstr = "";
  const shorter = str1.length < str2.length ? str1 : str2;
  const longer = str1.length >= str2.length ? str1 : str2;

    for (let i = 0; i < shorter.length; i++) {
        for (let j = i + 1; j <= shorter.length; j++) {
            const currentSubstr = shorter.slice(i, j); 
            if (currentSubstr.length > maxLength && longer.indexOf(currentSubstr) !== -1) {
                maxLength = currentSubstr.length;
                maxSubstr = currentSubstr;
            }
        }
    }

    return maxSubstr;
}