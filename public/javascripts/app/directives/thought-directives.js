

angular.module('thoughtDirectives', []);

angular.module('thoughtDirectives').directive('thoughtCounter', function() {

    var thoughtCounterDirective = {

        restrict: 'E',

        template: '<span>You have {{thoughts.length}} thought(s)</span>',

        replace: true,

        link: function(scope, element, atts) {

            element.html(this.template);

        }

    };

    return thoughtCounterDirective;

});