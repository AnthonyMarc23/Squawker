"use strict";

const list = {

  bindings: {
    postList: "<"
  },
  template: `
  <section>
    <div ng-show="$ctrl.postList[0]" ng-repeat="posts in $ctrl.postList">
    <h3>{{ posts.head }}</h3>
    <p>{{ posts.text }}</p>
    </div>
    <p ng-hide="$ctrl.postList[0]">{{ $ctrl.warning }}</p>
  </section>
  `,
  controller: function () {
    const vm = this;
    vm.$onInit = () => {
      if (!vm.postList[0]) {
        vm.warning = "There are no Posts. Please add a post.";
      }
    };
  }
};


angular
  .module("app")
  .component("list", list);