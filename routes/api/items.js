// Dependencies

const router = require('express').Router();

const mongoose = require('mongoose');

const Item = mongoose.model('Item');

const User = mongoose.model('User');

const auth = require('../auth');

// Preload items objects on routes with ':item'
router.param('item', (req, res, next) => {
  Item.findOne({ slug: slug })
    .populate('name')
    .then((item) => {
      if (!item) { return res.sendStatus(404); }
      req.item = item;

      return next();
    }).catch(next);
});

router.get('/item', auth.required, (req, res, next) => {
  Item.find({}).then((item) => {
    if (!item) { return res.sendStatus(401); }

    return res.json({ item: item.toAuthJSON() });
  }).catch(next);
});

router.get('/items', (req, res) => {
  Item.find({}, (err, items) => {
    res.json(items);
  });
});

// dont know that we need this.
router.put('/:items', auth.required, (req, res, next) => {
  Item.findById(req.payload.id).then((user) => {
    if (req.item.name.toString() === req.payload.name.toString()) {
      if (typeof req.body.item.name !== 'undefined') {
        req.item.name = req.body.item.name;
      }
      req.item.save().then((item) => {
        return res.json({ item: item.toJSONFor(user) });
      }).catch(next);
    } else {
      return res.sendStatus(403);
    }
  });
});

router.get('/items', (req, res, next) => {
  Item.find({}, (err, items) => {
    res.json(items);
  });
});

router.post('/items', (req, res, next) => {
  const item = new Item();

  item.name = req.body.item.name;
  item.category = req.body.item.category;
  item.quantity = req.body.item.quantity;
  item.expiration = req.body.item.expiration;

  item.save().then(() => {
    return res.json({ item: item.toJSONfor() });
    console.log('items inserted');
  }).catch(next);
});

module.exports = router;
