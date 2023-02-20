import mongoose from 'mongoose';
import { user_activities } from 'server/activities';
import connectToDatabase from 'server/db-config';
import dbUSERS from 'server/models/users';
import dbUSERCOURSES from 'server/models/users/courses';
const ObjectId = mongoose.Types.ObjectId;

export default async function (req, res) {
  await connectToDatabase();
  let status = 400;
  let resp = {};
  if (req.method === 'POST') {
    const { userid, target } = JSON.parse(req.body);
    const user = await dbUSERS.findOne({ userID: userid }, { _id: 1 });

    if (user) {
      const courses = await dbUSERCOURSES.findOne({ userID: ObjectId(user._id) }, { favourites: 1, read: 1, _id: 0 });
      if (courses) {
        let data = {};
        if (target === user_activities.read) {
          // only read
          data = courses.read;
        } else if (target === user_activities.favourites) {
          // only favourites
          data = courses.favourites;
        } else {
          // both read and favourites
          data = courses;
        }
        status = 200;
        resp = {
          message: 'Ok',
          data,
        };
      } else {
        status = 204;
        resp = {
          message: 'Nothing here',
        };
      }
    } else {
      status = 400;
      resp = {
        message: 'User not found',
      };
    }

    res.status(status).json(resp);
  }
}
