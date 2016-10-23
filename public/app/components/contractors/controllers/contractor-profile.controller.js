(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ContractorProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', ContractorProfileCtrl]);

    function ContractorProfileCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('ContractorProfileCtrl');
    }

} ());
