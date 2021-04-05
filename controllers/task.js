const Task = require("../models/task");

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.fetchTasks();

    res.json({
      message: "Tasks Fetched",
      data: tasks,
    });
  } catch (error) {
    console.log(error);
  }
};
