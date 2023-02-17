const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const USERHACKATHONS = new Schema({
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

const dbUSERHACKATHONS = mongoose.model('userhackathons', USERHACKATHONS);

module.exports = dbUSERHACKATHONS;
