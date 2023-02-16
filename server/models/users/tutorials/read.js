const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const READTUTORIALS = new Schema({
  userID: {
    type: ObjectId,
    required: true,
  },
  read: {
    type: Array,
    default: [],
  },
});

const dbREADTUTORIALS = mongoose.model('readtutorials', READTUTORIALS);

module.exports = dbREADTUTORIALS;
