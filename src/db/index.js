//entire page  ̶s̶h̶a̶m̶e̶l̶e̶s̶s̶l̶y̶ ̶s̶t̶o̶l̶e̶n̶ "INSPIRED" by chatgpt
const mongoose = require('mongoose');

const DB_URI = 'mongodb://mongoadm:mongopw@localhost:27017/';
//`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@localhost/your-database-name`;

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on('error', (error) => {
      console.error('MongoDB connection error:', error);
      reject(error); // Reject the promise on connection error
    });

    db.once('open', () => {
      console.log('Connected to MongoDB');
      resolve(mongoose); // Resolve the promise with the Mongoose instance
    });
  });
};

// Export the connectToDatabase function for use in your app
module.exports = connectToDatabase;