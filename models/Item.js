// ---------- Dependencies ---------

const mongoose = require('mongoose');

const uniqueValidator = require('mongo-unique-validator');

const slug = require('slug');

const User = require = mongoose.model('User');

// --------- Item Schema ----------
const ItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  quantitiy: Number,
  expiration: {type: Number, default: 1},
  reserved: { type: Boolean, default: 0},
  donor: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
}, { timstamps: true });


ItemSchema.methods.slugify = () => {
  this.slug = slug(this.name) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

ItemSchema.methods.toJSONfor = (User) => {
  return {
    slug: this.slug,
    namecategory: this.name,
    quantitiy: this.quantitiy,
    expiration: this.expiration,
    reserved: this.reserved,
    donor: this.donor,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

mongoose.model('Item', ItemSchema);
