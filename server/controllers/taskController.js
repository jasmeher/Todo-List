const Task = require("../models/Task");
const User = require("../models/User");
const Category = require("../models/Category");

const createTask = async (req, res) => {
  try {
    const { title, desc, date, user, cId } = req.body;

    if (!title || !desc || !date || !user || !cId) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    if (req.userInfo.id !== user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userObj = await User.findOne({ _id: user });

    if (!userObj) {
      return res.status(400).json({ message: "User not found" });
    }

    const categories = await Promise.all(
      cId.map((cat) => Category.findOne({ _id: cat }))
    );

    const task = new Task({
      title,
      desc,
      date,
      user,
      cId,
    });
    // console.log(task);

    await task.save();
    // console.log("Hello");

    if (task) {
      userObj.tasks.push(task._id);
      await userObj.save();

      if (categories.length > 0) {
        await Promise.all(
          categories.map((cat) => {
            cat.tasks.push(task._id);
            return cat.save();
          })
        );
      }

      res.status(201).json({ message: "Task created Successfuly" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createTask,
};
