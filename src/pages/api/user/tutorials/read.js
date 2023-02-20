import mongoose from 'mongoose';
import connectToDatabase from 'server/db-config';
import dbUSERS from 'server/models/users';
import dbUSERTUTORIALS from 'server/models/users/tutorials';
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
        const tutorials = await dbUSERTUTORIALS.findOne(
          {
            userID: ObjectId(user._id),
          },
          {
            read: 1,
            _id: 1,
          }
        );

        if (tutorials) {
          const matchesTitle = await dbUSERTUTORIALS.findOne(
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
          //checking for duplicate title
          if (matchesTitle) {
            status = 404;
            resp = {
              message: 'Duplicate title found',
            };
          } else {
            const result = await tutorials.updateOne({
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
                message: 'Failed to track tutorial',
              };
            }
          }
        } else {
          //Initiate tutorial in case either read or favoutites are all empty
          const result = await new dbUSERTUTORIALS({
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
              message: 'Failed to track tutorial',
            };
          }
        }
      } else {
        resp = {
          message: 'User not found',
        };
      }
    } else {
      resp = {
        message: 'Expected userid and title',
      };
    }
    res.status(status).json(resp);
  }
}
