/**
 * Format should be the following:
 * 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function (address) {
    const order = ['street', 'house', 'apartment', 'city', 'postalCode', 'country'];
    return order.map(key => address[key]).join(', ');
  };
};
