
angular.module('thoughtsApp', ['thoughtControllers', 'thoughtProviders', 'thoughtDirectives']);

angular.module('thoughtsApp').config(function($routeProvider) {

    $routeProvider

        .when('/', {controller: 'ThoughtController', templateUrl: 'partials/simple-thoughts'})

        .when('/deep-thoughts', {controller: 'ThoughtController', templateUrl: 'partials/deep-thoughts'})

        .otherwise('/');

}).run(function(ThoughtFactory) {

        ThoughtFactory.prefixThoughts('Umm...');

});
