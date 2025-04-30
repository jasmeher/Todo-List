const { createCategory } = require("../controllers/categoryController");
const router = require("express").Router();

router.route("/").post(createCategory);

module.exports = router;
