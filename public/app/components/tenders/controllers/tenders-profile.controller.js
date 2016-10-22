(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('TendersProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', TendersProfileCtrl]);

    function TendersProfileCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('TendersProfileCtrl');
    }

} ());
