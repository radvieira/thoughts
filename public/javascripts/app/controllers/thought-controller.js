
angular.module('thoughtsApp').controller('ThoughtController', function($scope, ThoughtFactory) {

    $scope.thoughts = ThoughtFactory.getThoughts();

    $scope.addThought = function() {

        ThoughtFactory.rememberThought ($scope.thought);

        delete $scope.thought;

    };

});
