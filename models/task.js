const getDb = require("../utils/database").getDb;
const collection = "tasks";

/* 
    Properties => Values they can have
    ______________________________________________________

    Status => Not Started, In Progress, On Hold, Completed

*/

class Task {
  constructor(
    title,
    priority,
    deadline,
    section,
    description,
    comments,
    tags,
    status
  ) {
    this.title = title;
    this.priority = priority;
    this.deadline = deadline;
    this.section = section;
    this.description = description;
    this.comments = comments;
    this.tags = tags;
    this.status = status;
  }

  save() {
    let db = getDb();
    return db.collection(collection).insertOne({
      title: this.title,
      priority: this.priority,
      deadline: this.deadline,
      section: this.section,
      description: this.description,
      comments: this.comments,
      tags: this.tags,
      status: this.status,
    });
  }

  static fetchTasks() {
    //   Fetch tasks only that have status => Not completed
    return db
      .collection(collection)
      .find({ $not: { status: "completed" } })
      .toArray();
  }
}
