const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6gyc1.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

let _db;

const mongoConnect = (callback) => {
  mongoClient
    .connect(URI)
    .then((client) => {
      _db = client.db();
      console.log("Connected!");
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
