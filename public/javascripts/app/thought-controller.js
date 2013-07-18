
angular.module('thoughtsApp').controller('ThoughtController', function($scope) {

    $scope.thoughts = [];

    $scope.addThought = function() {

        $scope.thoughts.push($scope.thought);
        delete $scope.thought;

    };

});
