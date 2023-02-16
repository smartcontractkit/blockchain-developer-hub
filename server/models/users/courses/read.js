const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const READCOURSES = new Schema({
  userID: {
    type: ObjectId,
    required: true,
  },
  read: {
    type: Array,
    default: [],
  },
});

const dbREADCOURSES = mongoose.model('readcourses', READCOURSES);

module.exports = dbREADCOURSES;
