const mongoose = require('mongoose');

const MONGODB_DB_URI = process.env.MONGODB_DB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME;

if (!MONGODB_DB_NAME) throw new Error('MONGODB_DB_NAME missing in env file');
if (!MONGODB_DB_URI) throw new Error('MONGODB_DB_URI missing in env file');

let cached = {
  conn: null,
  promise: null,
};

const connectToDatabase = async () => {
  console.log('Connecting to MongoDB...');
  // Connect to cached connection if available
  if (cached.conn) {
    console.log('Cached MongoDB Connected successfully');
    return cached.conn;
  }
  // mongoose.set('strictQuery', true);

  // Connect to MongoDB
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: '));
    db.once('open', function () {
      console.log('MongoDB Connected successfully');
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = connectToDatabase;
