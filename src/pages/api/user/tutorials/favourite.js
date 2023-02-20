import mongoose from 'mongoose';
import connectToDatabase from 'server/db-config';
import dbUSERS from 'server/models/users';
import dbUSERTUTORIALS from 'server/models/users/tutorials';
const ObjectId = mongoose.Types.ObjectId;

/**
 *
 * @param {action: 1 | 0} req // 1: add, 0: remove
 * @param {title: string} req
 * @param {userid: string} req
 *
 */

export default async function (req, res) {
  await connectToDatabase();
  let status = 400;
  let resp = {};
  if (req.method === 'POST') {
    const { userid, title, action } = JSON.parse(req.body);

    if (userid && title && action) {
      const user = await dbUSERS.findOne({ userID: userid }, { _id: 1 });
      if (user) {
        const courses = await dbUSERTUTORIALS.findOne({ userID: ObjectId(user._id) }, { favourites: 1, _id: 1 });
        if (courses) {
          const matchesTitle = await dbUSERTUTORIALS.findOne(
            {
              userID: ObjectId(user._id),
              favourites: { $elemMatch: { title: title } },
            },
            {
              favourites: 1,
              _id: 1,
            }
          );
          //Preventing duplicate titles from being added
          if (matchesTitle && action === 1) {
            status = 404;
            resp = {
              message: 'Duplicate title found',
            };
          } else if (matchesTitle && action === 0) {
            // Remove as favourite
            const result = await courses.updateOne({
              $pull: {
                favourites: { title },
              },
            });

            if (result && result.modifiedCount > 0) {
              status = 200;
              resp = {
                message: 'Favourite removed',
              };
            } else {
              resp = {
                message: 'Failed to remove Favourite course',
              };
            }
          } else if (!matchesTitle && action === 1) {
            //add title if title does exist
            const result = await courses.updateOne({
              $push: {
                favourites: { title },
              },
            });
            if (result && result.modifiedCount > 0) {
              status = 200;
              resp = {
                message: 'Favourite added',
              };
            } else {
              resp = {
                message: 'Failed to add Favourite tutorial',
              };
            }
          } else {
            status = 404;
            resp = {
              message: 'Seems you are trying to remove a tutorial that does not exist',
            };
          }
        } else {
          //Initiate tutorial in case either read or favoutites are all empty
          const result = await new dbUSERTUTORIALS({
            userID: ObjectId(user._id),
            favourites: [{ title }],
          });
          const savedData = await result.save();
          if (savedData) {
            status = 200;
            resp = {
              message: 'Favourite added',
            };
          } else {
            resp = {
              message: 'Failed to add Favourite tutorial',
            };
          }
        }
      } else {
        status = 404;
        resp = {
          message: 'User not found',
        };
      }
    } else {
      resp = {
        message: 'userid, title and action required',
      };
    }
    res.status(status).json(resp);
  }
}
