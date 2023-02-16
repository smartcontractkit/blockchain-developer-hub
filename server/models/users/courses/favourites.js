const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const FAVOURITECOURSES = new Schema({
  userID: {
    type: ObjectId,
    required: true,
  },
  favourites: {
    type: Array,
    default: [],
  },
});

const dbFAVOURITECOURSES = mongoose.model('favouritecourses', FAVOURITECOURSES);

module.exports = dbFAVOURITECOURSES;
