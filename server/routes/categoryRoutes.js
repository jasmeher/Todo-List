const { createCategory } = require("../controllers/categoryController");
const verifyJWT = require("../middlewares/verifyJWT");
const router = require("express").Router();

router.route("/").post(verifyJWT, createCategory);

module.exports = router;
