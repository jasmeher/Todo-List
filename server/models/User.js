const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    uName: {
      type: String,
      required: true,
    },
    fName: {
      type: String,
      required: true,
    },
    lName: String,
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tasks",
      },
    ],
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
// This code defines a Mongoose schema and model for a User in a MongoDB database.
