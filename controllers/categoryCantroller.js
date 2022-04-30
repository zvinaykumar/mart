"use strict";
var mongoose = require("mongoose"),
  categoryCollection = mongoose.model("categoryCollection");

exports.list_all_tasks = function (req, res) {
  categoryCollection.find({}, function (err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};
 