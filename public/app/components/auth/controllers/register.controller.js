(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('RegisterCtrl', ['api', '$state', 'ngToast', 'ConfigService', RegisterCtrl]);

    function RegisterCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('RegisterCtrl');
    }

} ());
