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

router.get('/', auth.optional, (req, res, next) => {
  // ref = 32

});

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

module.exports = router;
