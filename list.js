"use strict";

const list = {

  bindings: {
    postList: "<"
  },
  template: `
  <section>
    <div ng-show="$ctrl.contactList[0]" ng-repeat="post in $ctrl.postList">
    <h3>{{ post.head }}</h3>
    <p>{{ post.text }}</p>
    </div>
    <p ng-hide="$ctrl.contactList[0]">{{ $ctrl.warning }}</p>
  </section>
  `,
  controller: function () {
    const vm = this;
    vm.$onInit = () => {
      if (!vm.contactList[0]) {
        vm.warning = "There are no Posts. Please add a post.";
      }
    };
  }
};


angular
  .module("app")
  .component("list", list);