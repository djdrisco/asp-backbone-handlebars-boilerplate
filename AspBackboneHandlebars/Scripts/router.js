define(['app', 'backbone', 'views/homeview', 'models/person', 'collections/personList'], function(app, Backbone, HomeView, Person, PersonList) {
    var router = Backbone.Router.extend({
        routes:
        {
            '': 'home',
            'home': 'home'
        },
        home: function() {
            var hmView = new HomeView({ manage: true });

            //Backbone LayoutManager , can add one or more views since view paramater accepts an array of views
            var layoutHome = app.useLayout('main', { view: [hmView] });
            //Render 
            layoutHome.render();
        },
        initialize: function() {
        },
        render_complete: function(el) {
        },
        navigate: function (page) {
            //variable that stores which page is active
            this.app_model.set('active', page);
        }
    });
        return router;
    }
    );