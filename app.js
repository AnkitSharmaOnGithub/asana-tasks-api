const express = require("express");

const bodyParser = require("body-parser");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(taskRoutes);
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
app.listen(8000);
