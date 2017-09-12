var express = require('express');
var csvUserRouter = express.Router();

CsvUsers = require('../models/csvUser');

csvUserRouter.route('/')
.get(function(req, res, next) {
  CsvUsers.find({}, function (err, users) {
    if (err) {
      console.log(err);
      next(err);
    }
    else {
      res.json(users);
    }
  })
})
.post(function(req, res, next) {
  console.log(req.body);

  CsvUsers.collection.insert(req.body, function(err, users){
    if (err) {
      console.log(err);
      next(err);
    }
    else {
      res.send("Users Uploaded Successfully");
    }
  });

});

module.exports = csvUserRouter;
