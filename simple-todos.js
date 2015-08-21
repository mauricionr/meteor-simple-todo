Tasks = new Mongo.Collection("tasks");
if (Meteor.isClient) {
  // This code only runs on the client
  // This code only runs on the client
  Template.body.helpers({
<<<<<<< HEAD
    tasks: function(){
     return [
        {text: "This is task 1"},
        {text: "This is task 2"},
        {text: "This is task 1"}
      ]
=======
    tasks: function () {
      // Show newest tasks at the top
      return Tasks.find({}, {sort: {createdAt: -1}});
>>>>>>> 6e46117ad414142984f197eae8a149debfb204ff
    }
  });
  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";
    }
  });
  Template.task.events({
    "click .toogle-checked": function (){
      Tasks.update(this._id, {
        $set:{cheked: ! this.cheked}
      });
    },
    "click .delete": function (){
      Tasks.remove(this._id);
    }
  });

}
