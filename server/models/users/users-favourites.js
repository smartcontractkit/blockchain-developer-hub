//Model for user favourite courses

const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const USERSFAVOURITES = new Schema({
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
  hackathons: {
    type: Array,
    default: [],
  },
});

const dbUSERSFAVOURITES = mongoose.model('usersfavourites', USERSFAVOURITES);

module.exports = dbUSERSFAVOURITES;
