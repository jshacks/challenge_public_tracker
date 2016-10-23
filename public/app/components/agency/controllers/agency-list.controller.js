(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('AgencyListCtrl', ['api', '$state', 'ngToast', 'ConfigService', AgencyListCtrl]);

    function AgencyListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('AgencyListCtrl');

        if ($state.current.name === 'app.agencies') {
            $state.go('app.agencies.list');
        }

        self.agenciesList = [];

        self.getAllAgencies = function getAllAgencies () {
            api.get('agencies')
                .then(function success (data) {
                    self.contractsData = data;
                    console.log('data: ', self.contractsData);

                    console.log('self.contractsData', self.contractsData);
                    self.viewBy = 10;
                    self.totalItems = self.contractsData.length;
                    self.currentPage = 1;
                    self.itemsPerPage = self.viewBy;
                    self.maxSize = 5;

                    self.setPage = function (pageNo) {
                        self.currentPage = pageNo;
                    };

                    self.pageChanged = function() {
                        console.log('Page changed to: ' + self.currentPage);
                    };

                    self.setItemsPerPage = function(num) {
                        self.itemsPerPage = num;
                        self.currentPage = 1;
                    };

                    self.agenciesList = data.data.slice(0, 10);
                    console.log('data: ', self.agenciesList);

                }, function error (err) {
                    console.log('error: ', err);
                });

        };

        self.getAllAgencies();

        self.getById = function getById (id) {
            $state.go('app.agencies.profile', {id: id});
        };


    }

} ());
