const dotenv = require("dotenv");
dotenv.config("./.env");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./config/connection");

/* Middlewares */
app.use(bodyParser.json());

/* ROUTES IMPORT */
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.get("/", (req, res) => {
  res.send("TODO LIST SERVER");
});

/* ROUTING HANDLER */
app.use("/auth", authRoutes);
app.use("/task", taskRoutes);
app.use("/category", categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
