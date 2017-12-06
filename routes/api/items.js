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

router.post('/items', (req, res, next) => {
  const itemTest = new Item();

  itemTest.name = 'fish';
  itemTest.category = 'protein';
  itemTest.quantity = 100;
  itemTest.expiration = 1;
  itemTest.reserved = 0;
  itemTest.donor = '5a27655d2a983c2cd341196b';

  itemTest.save().then(() => {
    return res.json({ item: itemTest.toJSONfor() });
    res.send('test items inserted');
  }).catch(next);
});

module.exports = router;
