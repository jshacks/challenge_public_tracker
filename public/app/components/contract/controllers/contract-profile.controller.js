(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ContractProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', '$stateParams', ContractProfileCtrl]);

    function ContractProfileCtrl (api, $state, ngToast, ConfigService, $stateParams) {
        var self = this;

        self.id = $stateParams.id;

        console.log('ContractProfileCtrl', self.id);
    }

} ());
