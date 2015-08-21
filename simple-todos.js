Tasks = new Mongo.Collection("tasks");
if (Meteor.isClient) {
  // This code only runs on the client
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      // Show newest tasks at the top
      return Tasks.find({}, {sort: {createdAt: -1}});
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
        createdAt: new Date(),
        checked:false// current time
      });

      // Clear form
      event.target.text.value = "";
    }
  });
  Template.task.events({
    "click .toggle-checked": function (){
      console.log(this)
      Tasks.update(this._id, {
        $set: {checked:this.checked ? false : true}
      });
    },
    "click .delete": function (){
      Tasks.remove(this._id);
    }
  });

}
