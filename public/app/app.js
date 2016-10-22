angular.module('publicTracker', [
    'ui.router',
    'ngToast',
    'satellizer' 
])

.config(['$authProvider', function($authProvider) {
  $authProvider.facebook({
    clientId: '1148760941883212'
  });
}]);
// angular.module('publicTracker').config(['ngToastProvider', function (ngToastProvider) {
//     ngToastProvider.configure({
//         dismissOnTimeout: true,
//         dismissButton: true,
//         dismissOnClick: false,
//         dismissButtonHtml: '<i class="fa fa-times error-left" aria-hidden="true"></i>',
//         horizontalPosition: 'center',
//         combineDuplications: true
//     });
// }]);
