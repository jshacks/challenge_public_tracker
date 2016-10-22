(function () {
    'use strict';

    angular
        .module('publicTracker')
        .config(['$stateProvider', '$urlRouterProvider', routes]);

    function routes ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: '/public/app/components/auth/templates/login.tpl.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/public/app/components/auth/templates/register.tpl.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register'
            })

            .state('app', {
                url: '/app',
                controller: 'AppCtrl',
                controllerAs: 'app',
                templateUrl: '/public/app/components/app/templates/app.tpl.html'
            })
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: '/public/app/components/dashboard/templates/dashboard.tpl.html',
                controller: 'DashboardCtrl',
                controllerAs: 'dashboard'
            });

        $urlRouterProvider.otherwise('/login');
    }

}());
