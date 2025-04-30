const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.route("/").post(register);
router.route("/login").post(login);

module.exports = router;
