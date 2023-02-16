//Model for courses the user has read

const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const USERSREAD = new Schema({
  userID: {
    type: ObjectId,
    required: true,
  },
  courses: {
    type: Array,
    default: [],
  },
  tutorials: {
    type: Array,
    default: [],
  },
  hackatons: {
    type: Array,
    default: [],
  },
});

const dbUSERSREAD = mongoose.model('usersread', USERSREAD);

module.exports = dbUSERSREAD;
