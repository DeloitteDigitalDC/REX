'use strict';

/**
 * @ngdoc factory
 *
 * @name modals
 *
 * @description
 * Factory for rex
 */
(function() {

  angular
    .module('rex')
    .factory('modals', modals);

  function modals($mdDialog) {
    return {
      addDrug: addDrug,
      removeDrug: removeDrug
    };

    function addDrug(evt, drug) {
      return $mdDialog.show({
        controller: 'AddDrugModalCtrl',
        controllerAs: 'AddDrug',
        templateUrl: 'app/views/add-drug-modal/add-drug-modal.view.html',
        targetEvent: evt,
        resolve: {
          drugToAdd: function() {
            return drug;
          }
        }
      });
    }

    function removeDrug(evt) {
      return $mdDialog.show({
        templateUrl: 'app/views/remove-drug-modal/remove-drug-modal.view.html',
        controller: 'RemoveDrugModalCtrl',
        controllerAs: 'RemoveDrug',
        targetEvent: evt
      });
    }
  }

})();

