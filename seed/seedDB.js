// lol... NONE OF THIS DOES ANYTHING BUT I"M KEEPING IT FOR POSTERITY FOR NOW

// const mongoose = require('mongoose');
// const db = require('../models/User');

// mongoose.Promise = global.Promise;

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/api/users',
//   {
//     useMongoClient: true,
//   },
// );

// This file empties the Items and user collection and inserts test data

const userSeed = [
  {
    username: 'rick',
    email: 'test@test.test',
    organization: 'adventures',
    phoneNumber: 1005556666,
    image: 'insertImage',
    address: '1234main',
    pickupTime: '4-5',
    recipient: 0,
    password: 'test',
  },
];

// db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.log(err);
//     process.exit(1);
//   });


const itemSeed = [
  {
    name: 'pork',
    categorty: 'protein',
    quantitiy: 100,
    expiration: 10,
    reserved: 0,
    // this ref's the user 'rick'
    donor: '5a27655d2a983c2cd341196b',
  },
];

// db.Item
//   .remove({})
//   .then(() => db.Item.collection.insertMany(itemSeed))
//   .then(data => {
//     console.log(data.insertedIds.length + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.log(err);
//     process.exit(1);
//   });
