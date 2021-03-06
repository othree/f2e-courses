import Backbone from 'backbone';
import appView from './view/app';
import itemView from './view/item';

var AppRoute = Backbone.Router.extend({

  routes: {
    "": "default",
    "item/:id": "item"
  },

  default: function () {
    itemView.disable();
    appView.enable();
    appView.render();
  },

  item: function (id) {
    var item = appView.todos.get(id);
    appView.disable();
    itemView.enable();
    itemView.render(item);
  }

});

export default AppRoute;
