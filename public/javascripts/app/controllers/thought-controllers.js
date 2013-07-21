
angular.module('thoughtControllers', ['thoughtProviders']);

angular.module('thoughtControllers').controller('ThoughtController', function($scope, ThoughtFactory) {

    $scope.thoughts = ThoughtFactory.getThoughts();

    $scope.addThought = function() {

        ThoughtFactory.rememberThought ($scope.thought);

        delete $scope.thought;

    };

});