define(['jquery','underscore','backbone', 'models/person'], function($, _, Backbone, Person) {
    var personList = Backbone.Collection.extend({
        model: Person,
        //update url to match your endpoints, this is an example
        //url: 'api/getPersons'
    });

    return personList;
});