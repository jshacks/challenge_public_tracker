(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ContractProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', ContractProfileCtrl]);

    function ContractProfileCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('ContractProfileCtrl');
    }

} ());
