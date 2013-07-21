
angular.module('thoughtProviders', []);

angular.module('thoughtProviders').factory('ThoughtFactory', function() {

    var thoughts = ['JavaScript is everywhere!', 'AngularJS + NodeJS <3'],

        thoughtFactory = {

            getThoughts: function() {
                return thoughts;
            },

            rememberThought: function(thought) {
                thoughts.push(thought);
            }

        };

    return thoughtFactory;

});
