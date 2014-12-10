require.config({
        deps: ['main'],
        paths:
        {
            jquery: 'lib/jquery-1.11.1',
            underscore: 'lib/underscore',
            backbone: 'lib/backbone',
            handlebars: 'lib/handlebars-v2.0.0',
            layoutmanager: 'lib/backbone.layoutmanager'
        },
        shim: {
            underscore: {
                exports: '_'
            },
            backbone: {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            handlebars: {
                exports: 'Handlebars'
            },
            layoutmanager: {
                deps: ['backbone']
            }
        }
    }
);