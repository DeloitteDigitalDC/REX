'use strict';

/**
 * @namespace utils
 */

var utils = {};

/**
 * Makes sure that the data passing through is valid JSON
 *
 * @memberof utils
 *
 * @param data
 *
 * @return {Object}
 */
utils.confirmJSON = function confirmJSON(data) {
  var json;

  try {
    json = JSON.parse(data);
  }
  catch (e) {
    json = data;
  }

  return json;
};

module.exports = utils;