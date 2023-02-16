//Model for user favourite courses

const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const USERSFAVOURITE = new Schema({
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

const dbUSERSFAVOURITE = mongoose.model('usersfavourites', USERSFAVOURITE);

module.exports = dbUSERSFAVOURITE;
