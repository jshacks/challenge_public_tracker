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
        });

        self.showDetail = function(e, point) {
            self.point = point;
            self.map.showInfoWindow('marker-info', point.id)
        };

        // self.hideDetail = function() {
        //     self.map.hideInfoWindow('marker-info');
        // };

        // NgMap.getMap({id: 'dashboardmap'}).then(function (map) {
        //     for (var i = 0; i < self.firedAlerts.length; i++) {
        //         if (self.currentfiredAlerts == self.firedAlerts[i].firedAlertId) {
        //             var selectedfiredAlerts = self.firedAlerts[i];
        //             bounds.extend(new google.maps.LatLng(selectedfiredAlerts.Thing.Latitude, selectedfiredAlerts.Thing.Longitude));
        //
        //             if (selectedfiredAlerts.Alert.MetricType == 'Geo_Breach' && selectedfiredAlerts.Thing.GeoDistance && selectedfiredAlerts.Thing.GeoDistance > 0) {
        //                 var thiefIcon = '/assets/images/map/thief.png';
        //                 //var radiusVal = distanceBetweenPoints_(new google.maps.LatLng(selectedfiredAlerts.Thing.Latitude, selectedfiredAlerts.Thing.Longitude),
        //                 //    new google.maps.LatLng(selectedfiredAlerts.Thing.Longitude, selectedfiredAlerts.Thing.Curr_Longitude));
        //
        //                 var thiefCircle = new google.maps.Circle({
        //                     strokeColor: '#FF0000',
        //                     strokeOpacity: 0.8,
        //                     strokeWeight: 2,
        //                     fillColor: '#FF0000',
        //                     fillOpacity: 0.15,
        //                     map: map,
        //                     center: new google.maps.LatLng(selectedfiredAlerts.Thing.Latitude, selectedfiredAlerts.Thing.Longitude),
        //                     radius: selectedfiredAlerts.Alert.MetricMoreThanValue
        //                     //selectedfiredAlerts.Thing.GeoDistance
        //                 });
        //
        //                 var thiefMarker = new google.maps.Marker({
        //                     position: {
        //                         lat: selectedfiredAlerts.Thing.Curr_Latitude,
        //                         lng: selectedfiredAlerts.Thing.Curr_Longitude
        //                     },
        //                     map: map,
        //                     icon: thiefIcon,
        //                     title: (selectedfiredAlerts.firedAlertsName ? selectedfiredAlerts.firedAlertsName : '')
        //                 });
        //
        //                 bounds.extend(new google.maps.LatLng(selectedfiredAlerts.Thing.Curr_Latitude, selectedfiredAlerts.Thing.Curr_Longitude));
        //                 map.fitBounds(bounds);
        //                 map.setZoom(map.getZoom() - 1);
        //             } else {
        //                 map.fitBounds(bounds);
        //                 map.setZoom(15);
        //             }
        //
        //             return;
        //
        //         }
        //     }
        // });

        console.log('DashboardCtrl');
    }

} ());
