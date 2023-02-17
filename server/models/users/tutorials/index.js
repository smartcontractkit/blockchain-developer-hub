const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const USERTUTORIALS = new Schema({
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

const dbUSERTUTORIALS = mongoose.model('usertutorials', USERTUTORIALS);

module.exports = dbUSERTUTORIALS;
