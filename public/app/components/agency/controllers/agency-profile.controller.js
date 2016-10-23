(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('AgencyProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', AgencyProfileCtrl]);

    function AgencyProfileCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('AgencyProfileCtrl');
    }

} ());
