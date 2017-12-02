// ---------- Dependencies ----------
const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

// --------- @DREW --- NEED A WAY TO CONNECT THE USER AUTH --- @DREW ---------
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
