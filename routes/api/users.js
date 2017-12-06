// Dependencies
const mongoose = require('mongoose');

const router = require('express').Router();

const passport = require('passport');

const User = mongoose.model('User');

const auth = require('../auth');

router.get('/user', auth.required, (req, res, next) => {
  User.findById(req.payload.id).then((user) => {
    if (!user) { return res.sendStatus(401); }

    return res.json({ user: user.toAuthJSON() });
  }).catch(next);
});

router.get('/testUser', (req, res, next) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
  // User.findById(req.payload.id).then((user) => {
  //   if (!user) { return res.sendStatus(401); }

  //   return res.json({ user: user.toAuthJSON() });
  // }).catch(next);
});

router.put('/user', auth.required, (req, res, next) => {
  User.findById(req.payload.id).then((user) => {
    if (!user) { return res.sendStatus(401); }

    // only update fields that were actually passed...
    if (typeof req.body.user.username !== 'undefined') {
      user.username = req.body.user.username;
    }
    if (typeof req.body.user.email !== 'undefined') {
      user.email = req.body.user.email;
    }
    if (typeof req.body.user.organization !== 'undefined') {
      user.organization = req.body.user.organization;
    }
    if (typeof req.body.user.phoneNumber !== 'undefined') {
      user.phoneNumber = req.body.user.phoneNumber;
    }
    if (typeof req.body.user.image !== 'undefined') {
      user.image = req.body.user.image;
    }
    if (typeof req.body.user.address !== 'undefined') {
      user.address = req.body.user.address;
    }
    if (typeof req.body.user.pickupTime !== 'undefined') {
      user.pickupTime = req.body.user.pickupTime;
    }
    if (typeof req.body.user.recipient !== 'undefined') {
      user.recipient = req.body.user.recipient;
    }
    if (typeof req.body.user.password !== 'undefined') {
      user.setPassword(req.body.user.password);
    }

    return user.save().then(() => {
      return res.json({ user: user.toAuthJSON() });
    });
  }).catch(next);
});

router.post('/users/login', (req, res, next) => {

  if (!req.body.user.email) {
    return res.status(422).json({ errors: { email: "can't be blank" } });
  }

  if (!req.body.user.password) {
    return res.status(422).json({ errors: { password: "can't be blank" } });
  }

  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) { return next(err); }

    if (user) {
      user.token = user.generateJWT();
      return res.json({ user: user.toAuthJSON() });
    }
    return res.status(422).json(info);
  })(req, res, next);
});

router.post('/users', (req, res, next) => {
  const userTest = new User();

  userTest.username = 'rick';
  userTest.email = 'test@test.test';
  userTest.setPassword('test');

  userTest.save().then(() => {
    return res.json({ user: userTest.toAuthJSON() });
    res.send('rick insterted');
  }).catch(next);

  // const user = new User();

  // user.username = req.body.user.username;
  // user.email = req.body.user.email;
  // user.setPassword(req.body.user.password);

  // user.save().then(() => {
  //   return res.json({ user: user.toAuthJSON() });
  // }).catch(next);
});

module.exports = router;
