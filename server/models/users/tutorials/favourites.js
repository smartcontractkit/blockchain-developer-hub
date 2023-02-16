const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const FAVOURITETUTORIALS = new Schema({
  userID: {
    type: ObjectId,
    required: true,
  },
  favourites: {
    type: Array,
    default: [],
  },
});

const dbFAVOURITETUTORIALS = mongoose.model('favouritetutorials', FAVOURITETUTORIALS);

module.exports = dbFAVOURITETUTORIALS;
