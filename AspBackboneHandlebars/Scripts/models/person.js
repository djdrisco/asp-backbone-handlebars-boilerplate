define(['jquery','underscore','backbone'], function($, _, Backbone) {
    var person = Backbone.Model.extend({
        defaults: function() {
            return {
                //sample property PID, change this to suit your needs
                PID: 0
            }
        }
    });
    return person;
});