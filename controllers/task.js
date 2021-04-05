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

exports.createTask = (req, res, next) => {
  const title = req.body.title;
  const priority = req.body.priority;
  const deadline = req.body.deadline;
  const section = req.body.section;
  const description = req.body.description;
  const comments = req.body.comments;
  const tags = req.body.tags;
  const status = req.body.title;

  const task = new Task(
    title,
    priority,
    deadline,
    section,
    description,
    comments,
    tags,
    status
  );

  task
    .save()
    .then((result) => {
      console.log(result);
      res.json({
        message: "Task Created",
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
