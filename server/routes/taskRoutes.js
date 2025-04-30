const { createTask } = require("../controllers/taskController");
const router = require("express").Router();

router.route("/").post(createTask);

module.exports = router;
