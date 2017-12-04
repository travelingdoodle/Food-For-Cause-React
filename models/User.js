// ---------- Dependencies ----------
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const crypto = require('crypto');

const jwt = require('jsonwebtoken');

const secret = require('../config').secret;

const UserSchema = new mongoose.Schema({
  name: String,
  organization: String,
  phoneNumber: String,
  email: String,
  address: { type: Number, default: 1 },
  pickup: String,
  // Default value of 0 means user is not a donor
  donor: { type: Boolean, default: 0 },
}, { timstamps: true });

mongoose.model('User', UserSchema);
