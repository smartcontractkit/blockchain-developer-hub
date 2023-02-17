const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const USERCOURSES = new Schema({
  userID: {
    type: ObjectId,
    required: true,
  },
  favourites: {
    type: Array,
    default: [],
  },
  read: {
    type: Array,
    default: [],
  },
});

const dbUSERCOURSES = mongoose.model('usercourses', USERCOURSES);

module.exports = dbUSERCOURSES;
