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

  function modals($modal) {
    return {
      addDrug: addDrug,
      removeDrug: removeDrug
    };

    function addDrug(drug) {
      return $modal.open({
        templateUrl: 'app/views/add-drug-modal/add-drug-modal.view.html',
        controller: 'AddDrugModalCtrl',
        controllerAs: 'AddDrug',
        resolve: {
          drugToAdd: function() {
            return drug;
          }
        }
      });
    }

    function removeDrug(drug) {
      return $modal.open({
        templateUrl: 'app/views/remove-drug-modal/remove-drug-modal.view.html',
        controller: 'RemoveDrugModalCtrl',
        controllerAs: 'RemoveDrug'
      });
    }
  }

})();

