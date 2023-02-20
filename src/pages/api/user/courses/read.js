import mongoose from 'mongoose';
import connectToDatabase from 'server/db-config';
import dbUSERS from 'server/models/users';
import dbUSERCOURSES from 'server/models/users/courses';
const ObjectId = mongoose.Types.ObjectId;

export default async function (req, res) {
  await connectToDatabase();
  let status = 400;
  let resp = {};
  if (req.method === 'POST') {
    const { userid, title } = JSON.parse(req.body);

    if (userid && title) {
      const user = await dbUSERS.findOne(
        {
          userID: userid,
        },
        {
          _id: 1,
        }
      );
      if (user) {
        const courses = await dbUSERCOURSES.findOne(
          {
            userID: ObjectId(user._id),
          },
          {
            read: 1,
            _id: 1,
          }
        );

        if (courses) {
          const matchesTitle = await dbUSERCOURSES.findOne(
            {
              userID: ObjectId(user._id),
              read: {
                $elemMatch: {
                  title: title,
                },
              },
            },
            {
              read: 1,
              _id: 1,
            }
          );

          if (matchesTitle) {
            status = 404;
            resp = {
              message: 'Duplicate title found',
            };
          } else {
            const result = await courses.updateOne({
              $push: {
                read: {
                  title,
                },
              },
            });
            if (result && result.modifiedCount > 0) {
              status = 200;
              resp = {
                message: 'Marked as read',
              };
            } else {
              resp = {
                message: 'Failed to track course',
              };
            }
          }
        } else {
          const result = await new dbUSERCOURSES({
            userID: ObjectId(user._id),
            read: [
              {
                title,
              },
            ],
          });
          const savedData = await result.save();
          if (savedData) {
            status = 200;
            resp = {
              message: 'tracking successfull',
            };
          } else {
            resp = {
              message: 'Failed to track course',
            };
          }
        }
      } else {
        resp = {
          message: 'Expected userid and title',
        };
      }

      res.status(status).json(resp);
    }
  }
}
