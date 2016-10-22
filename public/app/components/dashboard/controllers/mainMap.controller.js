(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('mainMapCtrl', ['api', '$state', 'ngToast', 'ConfigService', mainMapCtrl]);

    function mainMapCtrl (api, $state, ngToast, ConfigService) {
        var self = this;



        console.log('mainMapCtrl');
    }

} ());
