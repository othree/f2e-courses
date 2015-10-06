
var _sync = Backbone.sync;
Backbone.sync = function (method, model, options) {
  options.beforeSend = function (xhr) {
    xhr.setRequestHeader("X-Parse-Application-Id", KEYS["X-Parse-Application-Id"]);
    xhr.setRequestHeader("X-Parse-REST-API-Key", KEYS["X-Parse-REST-API-Key"]);
  }
  _sync.call( this, method, model, options );
}

