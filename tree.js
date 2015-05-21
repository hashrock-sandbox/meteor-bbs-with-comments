Posts = new Meteor.Collection('posts');
Comments = new Meteor.Collection('comments');

if (Meteor.isClient) {
  Template.hello.helpers({
    posts: function(){
      return Posts.find();
    }
  });
  
  Template.form.events({
    "submit form": function(e){
      e.preventDefault();
      var text = event.target.content.value;
      Posts.insert({
        content: text
      });
      event.target.content.value = "";
    }
  });
  
  Template.commentForm.events({
    "submit form": function(e){
      e.preventDefault();
      var text = event.target.content.value;
      Comments.insert({
        content: text,
        postId: this._id
      });
      event.target.content.value = "";
    }
  });
  
  Template.post.helpers({
    comments: function(){
      return Comments.find({postId: this._id});
    }
  });
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
