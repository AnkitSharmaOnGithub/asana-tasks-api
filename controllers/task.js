const Task = require("../models/task");

exports.getTasks = async (req, res, next) => {
  const tasks = await Task.fetchTasks();

  res.json({
    message: "Tasks Fetched",
    data: tasks,
  });
};
