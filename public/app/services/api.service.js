(function () {
    'use strict';

    angular
        .module('publicTracker')
        .factory('api', ['$http', api]);

    function api ($http) {
        var api = {};

        api.apiUrl = 'http://jfvgytocee.localtunnel.me/';

        api.get = function get (url) {
            var request = $http({
                method: 'GET',
                url: api.apiUrl + url,
                headers: {
                    'Content-type': 'application/json'
                }
            });

            return request;
        };

        api.post = function post (url, data) {
            var request = $http({
                method: 'POST',
                url: api.apiUrl + url,
                data: data,
                headers: {
                    'Content-type': 'application/json'
                }
            });

            return request;
        };

        api.put = function put (url, data) {
            var request = $http({
                method: 'PUT',
                url: api.apiUrl + url,
                data: data,
                headers: {
                    'Content-type': 'application/json'
                }
            });

            return request;
        };

        api.delete = function deleteRequest (url, data) {
            var request = $http({
                method: 'DELETE',
                url: api.apiUrl + url,
                data: data,
                headers: {
                    'Content-type': 'application/json'
                }
            });

            return request;
        };

        return api;
    }

}());
