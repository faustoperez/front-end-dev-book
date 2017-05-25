(function (window) {
  'use strict';
  var App = window.App || {};
  var Promise = window.Promise;

  function DataStore() {
    this.data = {};
  }

  function promiseResolveWidth(value) {
    var promise = new Promise(function (resolve, reject) {
      resolve(value);
    });
    return promise;
  }

  DataStore.prototype.add = function (key, val) {
    return promiseResolveWidth(null);
  };

  DataStore.prototype.get = function (key) {
    return promiseResolveWidth(this.data[key]);
  };

  DataStore.prototype.getAll = function () {
    return promiseResolveWidth(this.data);
  }

  DataStore.prototype.remove = function (key) {
    delete this.data[key];
    return promiseResolveWidth(null);
  }

  App.DataStore = DataStore;
  window.App = App;

})(window);
