(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ContractorProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', '$stateParams', ContractorProfileCtrl]);

    function ContractorProfileCtrl (api, $state, ngToast, ConfigService, $stateParams) {
        var self = this;

        self.id = $stateParams.id;

        console.log('ContractorProfileCtrl', self.id);
    }

} ());
