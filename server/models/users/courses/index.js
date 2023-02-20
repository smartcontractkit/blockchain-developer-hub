const mongoose = require('mongoose');
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

const USERCOURSES = new Schema({
  userID: {
    type: ObjectId,
    required: true,
  },
  favourites: {
    type: Array({
      title: String,
    }),
    default: [],
  },
  read: {
    type: Array({ title: String }),
    default: [],
  },
});

const dbUSERCOURSES = mongoose.model('usercourses', USERCOURSES);

module.exports = dbUSERCOURSES;
