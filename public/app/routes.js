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
            })

            .state('app.agency-list', {
                url: '/agency-list',
                templateUrl: '/public/app/components/agency/templates/agency-list.tpl.html',
                controller: 'AgencyListCtrl',
                controllerAs: 'agency'
            })

            .state('app.contract-list', {
                url: '/contract-list',
                templateUrl: '/public/app/components/contract/templates/contract-list.tpl.html',
                controller: 'ContractListCtrl',
                controllerAs: 'contract'
            })

            .state('app.contractor-list', {
                url: '/contractor-list',
                templateUrl: '/public/app/components/contractors/templates/contractor-list.tpl.html',
                controller: 'ContractorListCtrl',
                controllerAs: 'contractor'
            })

            .state('app.services-list', {
                url: '/services-list',
                templateUrl: '/public/app/components/services/templates/services-list.tpl.html',
                controller: 'ServicesListCtrl',
                controllerAs: 'services'
            })

            .state('app.tenders-list', {
                url: '/tenders-list',
                templateUrl: '/public/app/components/tenders/templates/tenders-list.tpl.html',
                controller: 'TendersListCtrl',
                controllerAs: 'tenders'
            });

        $urlRouterProvider.otherwise('/login');
    }

}());
