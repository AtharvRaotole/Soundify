// const mongoose = require("../database");
//mongodb lib 
var mongoose = require("mongoose");

var songSchema = mongoose.Schema({
  name: String,
  desc: String,
  song: {
    data: Buffer,
    contentType: String,
  },
});

//Image is a model which has a schema imageSchema

module.exports = new mongoose.model("Song", songSchema);
