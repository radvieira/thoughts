
angular.module('thoughtsApp', ['thoughtControllers', 'thoughtProviders']);

angular.module('thoughtsApp').config(function($routeProvider) {

    $routeProvider

        .when('/', {controller: 'ThoughtController', templateUrl: 'partials/simple-thoughts'})

        .when('/deep-thoughts', {controller: 'ThoughtController', templateUrl: 'partials/deep-thoughts'})

        .otherwise('/');

});
