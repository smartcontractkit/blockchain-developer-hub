const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const READHACKATHONS = new Schema({
  userID: {
    type: ObjectId,
    required: true,
  },
  read: {
    type: Array,
    default: [],
  },
});

const dbREADHACKATHONS = mongoose.model('readhackathons', READHACKATHONS);

module.exports = dbREADHACKATHONS;
