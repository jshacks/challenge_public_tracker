(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('TendersProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', '$stateParams', TendersProfileCtrl]);

    function TendersProfileCtrl (api, $state, ngToast, ConfigService, $stateParams) {
        var self = this;

        self.id = $stateParams.id;

        console.log('TendersProfileCtrl', self.id);
    }

} ());
