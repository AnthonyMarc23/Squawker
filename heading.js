"use strict";

const heading = {
  template: `
  <h1>Squawker</h1>
  <p ng-show="$ctrl.surprise" style="text-align: center">Where you make noise. On the internet.</p>
  `,

  controller: function($element, $scope) {
    const vm = this;
    vm.$postLink = () => {
      $element.css("color", "royalblue");
      $element.on("mouseenter", () => {
        $element.css("cursor", "crosshair");
        $scope.$apply(() => {
          vm.surprise = true;
        });
      });
        $element.on("mouseleave", () => {
          $scope.$apply(() => {
            vm.surprise = false;
          });

      });
    };
  }
}

angular
  .module("app")
  .component("heading", heading);