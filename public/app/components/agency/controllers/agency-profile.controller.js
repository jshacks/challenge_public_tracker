(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('AgencyProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', '$stateParams', AgencyProfileCtrl]);

    function AgencyProfileCtrl (api, $state, ngToast, ConfigService, $stateParams) {
        var self = this;

        self.id = $stateParams.id;

        console.log('AgencyProfileCtrl', self.id);
    }

} ());
