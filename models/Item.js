// ---------- Dependencies ---------

const mongoose = require('mongoose');

const slug = require('slug');

const User = mongoose.model('User');

// --------- Item Schema ----------
const ItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  quantitiy: Number,
  expiration: { type: Number, default: 1 },
  reserved: { type: Boolean, default: 0 },
  donor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timstamps: true });

ItemSchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

ItemSchema.methods.toJSONfor = () => {
  return {
    slug: this.slug,
    name: this.name,
    category: this.category,
    quantitiy: this.quantitiy,
    expiration: this.expiration,
    reserved: this.reserved,
    donor: this.donor,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

mongoose.model('Item', ItemSchema);
