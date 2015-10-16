
var Todos = Backbone.Collection.extend({
  model: Todo,
  url: 'https://api.parse.com/1/classes/todos',

  parse: function (data) {
    return data.results;
  }
});
