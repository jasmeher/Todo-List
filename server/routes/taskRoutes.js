const { createTask } = require("../controllers/taskController");
const router = require("express").Router();
const verifyJWT = require("../middlewares/verifyJWT");

router.route("/").post(verifyJWT, createTask);

module.exports = router;
