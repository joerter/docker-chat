var MongoClient = require('mongodb').MongoClient;
var process = require('process');

var url = 'mongodb://' + process.env.MONGO_DB + '/chat';

module.exports = {
  saveMessage: function (msg) {
    MongoClient.connect(url, function(err, db) {
      db.collection('messages').insertOne({message: msg}, function(err, response) {
        db.close();
      });
    });
  },
  allMessages: function (cb) {
    MongoClient.connect(url, function(err, db) {
      db.collection('messages').find({}).toArray(function (err, messages) {
        cb(messages);
        db.close();
      });
    });
  }
}
