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

            .state('app.agencies', {
                url: '/agencies',
                templateUrl: '/public/app/components/agency/templates/agencies.tpl.html',
                controller: 'AgencyListCtrl',
                controllerAs: 'agency'
            })
            .state('app.agencies.list', {
                url: '/list',
                templateUrl: '/public/app/components/agency/templates/agency-list.tpl.html'
            })
            .state('app.agencies.profile', {
                url: '/agency/:id',
                templateUrl: '/public/app/components/agency/templates/agency-profile.tpl.html',
                controller: 'AgencyProfileCtrl',
                controllerAs: 'profile'
            })

            .state('app.contracts', {
                url: '/contracts',
                templateUrl: '/public/app/components/contract/templates/contracts.tpl.html',
                controller: 'ContractListCtrl',
                controllerAs: 'contract'
            })
            .state('app.contracts.list', {
                url: '/list',
                templateUrl: '/public/app/components/contract/templates/contract-list.tpl.html'
            })
            .state('app.contracts.profile', {
                url: '/profile/:id',
                templateUrl: '/public/app/components/contract/templates/contract-profile.tpl.html',
                controller: 'ContractProfileCtrl',
                controllerAs: 'profile'
            })

            .state('app.contractors', {
                url: '/contractors',
                templateUrl: '/public/app/components/contractors/templates/contractors.tpl.html',
                controller: 'ContractorListCtrl',
                controllerAs: 'contractor'
            })
            .state('app.contractors.list', {
                url: '/list',
                templateUrl: '/public/app/components/contractors/templates/contractor-list.tpl.html'
            })
            .state('app.contractors.profile', {
                url: '/profile/:id',
                templateUrl: '/public/app/components/contractors/templates/contractor-profile.tpl.html',
                controller: 'ContractorProfileCtrl',
                controllerAs: 'profile'
            })

            .state('app.services', {
                url: '/services',
                templateUrl: '/public/app/components/services/templates/services.tpl.html',
                controller: 'ServicesListCtrl',
                controllerAs: 'services'
            })
            .state('app.services.list', {
                url: '/list',
                templateUrl: '/public/app/components/services/templates/services-list.tpl.html'
            })
            .state('app.services.profile', {
                url: '/profile/:id',
                templateUrl: '/public/app/components/services/templates/services-profile.tpl.html',
                controller: 'ServicesProfileCtrl',
                controllerAs: 'profile'
            })

            .state('app.tenders', {
                url: '/tenders',
                templateUrl: '/public/app/components/tenders/templates/tenders.tpl.html',
                controller: 'TendersListCtrl',
                controllerAs: 'tenders'
            })
            .state('app.tenders.list', {
                url: '/list',
                templateUrl: '/public/app/components/tenders/templates/tenders-list.tpl.html'
            })
            .state('app.tenders.profile', {
                url: '/profile/:id',
                templateUrl: '/public/app/components/tenders/templates/tenders-profile.tpl.html',
                controller: 'TendersProfileCtrl',
                controllerAs: 'profile'
            });

        $urlRouterProvider.otherwise('/login');
    }

}());
