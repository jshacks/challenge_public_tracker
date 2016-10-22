(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('DashboardCtrl', ['api', '$state', 'ngToast', 'ConfigService', 'NgMap' , DashboardCtrl]);

    function DashboardCtrl (api, $state, ngToast, ConfigService, NgMap) {
        var self = this;

        self.markers = [
            {
                id: 'marker1',
                position: '47, 29',
                title: 'marker1',
                count: '200'
            },
            {
                id: 'marker2',
                position: '46, 29',
                title: 'marker2',
                count: '5'
            },
            {
                id: 'marker3',
                position: '47, 28',
                title: 'marker3',
                count: '25'
            },
            {
                id: 'marker4',
                position: '46, 28',
                title: 'marker4',
                count: '4595'
            }
        ];

        NgMap.getMap({id: 'dashboard-map'}).then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
            self.map = map;

            var coord1 = new google.maps.LatLng(47, 29);
            var coord2 = new google.maps.LatLng(46, 28);
            var bounds = new google.maps.LatLngBounds();
            bounds.extend(coord1);
            bounds.extend(coord2);
            map.fitBounds(bounds);

            var pLineOpt = {
                path: [coord1, coord2],
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 0.7,
                strokeWeight: 2
            };

            var pLine = new google.maps.Polyline(pLineOpt);

            pLine.setMap(map);

        });

        self.buildCurve = function(x, y) {

        };

        self.showDetail = function(e, point) {
            self.point = point;
            self.map.showInfoWindow('marker-info', point.id)
        };

        // self.hideDetail = function() {
        //     self.map.hideInfoWindow('marker-info');
        // };

        console.log('DashboardCtrl');
    }

} ());
