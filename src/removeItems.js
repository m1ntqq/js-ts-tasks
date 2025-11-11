/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  function checking(a, b) {
    if (a === b) { 
      return true 
    }
    else if (typeof a === 'object' && typeof b === 'object') {
      for (key in a) { // key - massive index
        if (!checking(a[key], b[key])) { 
          return false;
         }
      }
      for (key in b) {
        if (!checking(a[key], b[key])) {
           return false;
           }
      }
      return true;
    }
  }

  let result = []
  for (var i = 0; i < arr.length; i++) {
    if (!checking(arr[i], value)) {
      result.push(arr[i]);
    }
  }
  return result;
};
