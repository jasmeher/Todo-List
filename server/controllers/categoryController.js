const Category = require("../models/Category");
const User = require("../models/User");

const createCategory = async (req, res) => {
  try {
    const { title, desc, user } = req.body;

    console.log(req.userInfo);

    if (!title || !desc || !user) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    if (req.userInfo.id !== user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userObj = await User.findOne({ _id: user });

    if (!userObj) {
      return res.status(400).json({ message: "User not Found" });
    }

    const category = new Category({
      title,
      desc,
      user,
    });

    await category.save();

    if (category) {
      userObj.categories.push(category._id);

      await userObj.save();

      res.status(201).json({ message: "Category Created Successfuly" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createCategory,
};
