'use strict';

/**
 * @name convertToArray
 *
 * Converts an object to an array. If an array is passed it it simply sends it back
 *
 * @param {Object|Array} object
 * @return {*}
 */
module.exports = function convertToArray(object) {
  var data;

  try {
    data = JSON.parse(object);
  }
  catch (e) {
    data = object;
  }

  var obj = data.drugs || [];

  if (Array.isArray(obj)) {
    return data;
  }

  data.drugs = Object.keys(obj).map(function (k) {
    obj[k].fbKey = k;

    return obj[k];
  });

  return data;
};