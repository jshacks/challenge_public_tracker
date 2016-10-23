(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ContractorListCtrl', ['api', '$state', 'ngToast', 'ConfigService', ContractorListCtrl]);

    function ContractorListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('ContractorListCtrl');
    }

} ());
