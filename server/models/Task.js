const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  cId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categories",
    },
  ],
});

const Task = mongoose.model("Tasks", taskSchema);
module.exports = Task;
// This code defines a Mongoose schema and model for a Task in a MongoDB database. The taskSchema includes fields for title, description, completion status, date, user reference, and category reference. The Task model is then exported for use in other parts of the application.
