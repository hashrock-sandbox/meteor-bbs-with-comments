Posts = new Meteor.Collection('posts');


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.rendered = function(){
    new Vue({
      el: "#main",
      sync: {
        posts: function(){
          return Posts.find();
        }
      },
      methods: {
        addPost: function(content){
          Posts.insert({
            content : content,
            comment: []
          });
        }
      }
    })
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
