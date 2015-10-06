var ItemView = Backbone.View.extend({
 
  el: '.todo-item',

  enable: function () {
    this.$el.show();
  },

  disable: function () {
    this.$el.hide();
  },

  template: $('#todo-tmpl').html(),

  render: function (item) {
    console.log(this.template, item.toJSON())
    this.$el.html(Mustache.render(this.template, item.toJSON()));
  }

});

var itemView = new ItemView();
