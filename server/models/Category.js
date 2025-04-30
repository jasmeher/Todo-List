const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

const Category = mongoose.model("Categories", categorySchema);
module.exports = Category;
// This code defines a Mongoose schema and model for a Category in a MongoDB database. The categorySchema includes fields for title, description, tasks (which is an array of ObjectId references to the Tasks model), and user (which is an ObjectId reference to the Users model). The Category model is then exported for use in other parts of the application.
