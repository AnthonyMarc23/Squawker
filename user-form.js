"use strict";

const userForm = {
  bindings: {
    newPost: "&"
  },

  template: `
  <form ng-submit="$ctrl.addPost({ newPost: $ctrl.newPost })">
    <input type="text" placeholder="Post Header" ng-model="$ctrl.newPost.head">
    <input type="text" placeholder="Post" ng-model="$ctrl.newPost.text">
    <button>Add</button>
  </form>
  `
};

angular
  .module("app")
  .component("userForm", userForm);