const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const USERS = new Schema(
  {
    userID: {
      type: String,
      unique: true,
      required: true,
    },
    lastLogIn: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const dbUSERS = mongoose.model('Users', USERS);

module.exports = dbUSERS;
