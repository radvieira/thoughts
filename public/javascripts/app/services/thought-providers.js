
angular.module('thoughtProviders', []);

angular.module('thoughtProviders').factory('ThoughtFactory', function() {

    var thoughts = [],

        thoughtFactory = {

            prefix: '',

            getThoughts: function() {
                return thoughts;
            },

            rememberThought: function(thought) {
                thoughts.push(this.prefix + thought);
            },

            prefixThoughts: function(prefix) {
                this.prefix = prefix;
            }

        }

    return thoughtFactory;

});
