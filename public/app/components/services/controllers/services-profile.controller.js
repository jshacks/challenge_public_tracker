(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ServicesProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', '$stateParams', ServicesProfileCtrl]);

    function ServicesProfileCtrl (api, $state, ngToast, ConfigService, $stateParams) {
        var self = this;

        self.id = $stateParams.id;

        console.log('ServicesProfileCtrl', self.id);
    }

} ());
