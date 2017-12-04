const mongoose = require('mongoose');
const db = require('../models');

mongoose.Promise = global.Promise;

// This file empties the Items and user collection and inserts test data

const userSeed = [
  {
    username: 'rick',
    email: 'rick@rick.rick',
    organization: 'adventures',
    phoneNumber: 1005556666,
    image: 'insertImage',
    address: '1234main',
    pickupTime: '4-5',
    recipient: 0,
  },
];

db.User
  .remove({})
  .then(() => db.Item.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

const itemSeed = [
  {
    name: 'Rick',
    categorty: 'grains',
    quantitiy: 100,
    expiration: 10,
    reserved: 0,
    donor: 'Morty',
  },
];

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
