const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const FAVOURITEHACKATHONS = new Schema({
  userID: {
    type: ObjectId,
    required: true,
  },
  favourites: {
    type: Array,
    default: [],
  },
});

const dbFAVOURITEHACKATHONS = mongoose.model('favouritehackathons', FAVOURITEHACKATHONS);

module.exports = dbFAVOURITEHACKATHONS;
