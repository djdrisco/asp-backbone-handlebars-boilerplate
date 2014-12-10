define(['jquery', 'underscore', 'backbone', 'handlebars', 'layoutmanager'
], function ($, _, Backbone, Handlebars) {
    "use strict";
    //provide a global location
    var app = {
        root: '/',
        isIE: /msie/i.test(navigator.userAgent) && !window.opera, //easy way to determine if ie
        isLowerIE8: (document.all && !document.querySelector) ? true: false  //ie less than ie 8
    };

    //sample of registering a  Handlebars Helper
    Handlebars.registerHelper('fullName', function(person) {
        return person.vchrGivenName + "" + person.vchrLastName;
    });

    //localize or create a new Javascript Template Object
    var JST = window.JST = window.JST || {};

    //configure Backbone Layoutmanager
    Backbone.Layout.configure({
        manage: true,
        prefix: 'Scripts/templates/',
        fetchTemplate: function(path) {
            var done;
            path = path + '.hbs';
            //if template has not been loaded yet, then load it
            if (!JST[path]) {
                done = this.async();

                return $.ajax({ url: app.root + path}).then(function(contents) {
                    JST[path] = Handlebars.compile(contents);
                    JST[path].__compiled__ = true;
                    done(JST[path]);
                });
            }

            //if template hasn't been compiled yet, then compile.
            if (!JST[path].__compiled__) {
                JST[path] = Handlebars.template(JST[path]);
                JST[path].__compiled__ = true;
            }

            return JST[path];

        }
    });

    //Mix-in Backbone.Events to add additional Properties, for example app.root , isIE, isLowerIE8 in this file
    return _.extend(app, {
        //Create a custom object with a nested Views object.
        module: function (additionalProps) {
            return _.extend({ Views: {} }, additionalProps);
        },
        useLayout: function(name, options) {
            
            if (this.layout && this.layout.options.template == name) {
                return this.layout;
            }

            this.layout = new Backbone.Layout({
                template: name,
                el: "#main_container",
                views: { "#main": options.view }
            });

            return this.layout;
        }
    }, Backbone.Events);

    return app;
});