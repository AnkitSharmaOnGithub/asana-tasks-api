const express = require("express");

const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");
const mongoConnect = require("./utils/database").mongoConnect;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/tasks", taskRoutes);
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
mongoConnect(() => {
  app.listen(8000);
});
