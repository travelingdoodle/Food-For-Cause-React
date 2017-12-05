// ---------- Dependencies ----------
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const crypto = require('crypto');

const jwt = require('jsonwebtoken');

const secret = require('../config').secret;

const UserSchema = new mongoose.Schema({
  username: {
    type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true,
  },
  email: {
    type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true,
  },
  organization: String,
  phoneNumber: String,
  image: String,
  address: String,
  pickupTime: String,
  // Default value of 0 means user is not a recipient, aka a donor
  recipient: { type: Boolean, default: 0 },
  hash: String,
  salt: String,
}, { timstamps: true });

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' });

UserSchema.methods.validPassword = (password) => {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.setPassword = (password) => {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = () => {
  const today = new Date();
  const exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = () => {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    organization: this.organization,
    phoneNumber: this.phoneNumber,
    image: this.image,
    address: this.address,
    pickupTime: this.pickupTime,
    // Default value of 0 means user is not a recipient, aka a donor
    recipient: this.recipient,
  };
};

UserSchema.methods.toProfileJSONFor = (User) => {
  return {
    username: this.username,
    organization: this.organization,
    phoneNumber: this.phoneNumber,
    image: this.image || 'http://www.syfy.com/sites/syfy/files/2017/10/rick_and_morty_1.jpg',
    address: this.address,
    pickupTime: this.pickupTime,
    // Default value of 0 means user is not a recipient, aka a donor
    recipient: this.recipient,
  };
};

mongoose.model('User', UserSchema);
