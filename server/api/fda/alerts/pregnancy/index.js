'use strict';

/**
 * @name pregnancy
 *
 * @description
 * Create an alert score for
 *
 * @param data
 * @param threshold
 */
module.exports = function (data, threshold) {
  threshold = threshold || 2;
  data = data[0];

  var alerts = 0,
      fields = ['pregnancy_or_breast_feeding', 'ask_doctor', 'do_not_use'],
      keys   = ['pregnant', 'Pregnant', 'pregnancy', 'Pregnancy', 'Breast Feeding', 'breast feeding'],
      string;

  if (data.pregnancy_or_breast_feeding || data.pregnancy) {

    fields.forEach(function (field) {

      keys.forEach(function (key) {

        if (data[field]) {

          string = data[field][0].split(' ');

          var idx;

          while ((idx = string.indexOf(key)) > -1) {
            string.splice(idx, idx + key.length);

            alerts++;
          }

        }
      });

    });

  }

  data.alerts = data.alerts || {};

  data.alerts.pregnancy =  alerts >= threshold;
};