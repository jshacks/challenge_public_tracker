(function () {
    'use strict';

    angular
        .module('publicTracker')
        .factory('ConfigService', [ConfigService]);

    function ConfigService () {
        var Config = {};

        Config.user = {};

        return Config;
    }

}());
