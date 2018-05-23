"use strict";
const contact = {
  template:`
  <section>
    <heading></heading>
    <user-form add-post="$ctrl.addPost(newPost);"></user-form>
    <list post-list="$ctrl.postList"></list>
  </section>
  `,
  controller: function($element) {
    const vm = this;
    vm.postList = [];
    vm.addPost = (newPost) => {
      console.log(newPost);
      vm.postList.push({
        head: newPost.head,
        text: newPost.text
      });
      vm.$postLink = () => {
        $element.on("cllick", () => {
          console.log("Clicky clicky");
        });
      }
      // console.log(vm.contactList);
    }
  }

};

angular
  .module("app")
  .component("contact", contact);