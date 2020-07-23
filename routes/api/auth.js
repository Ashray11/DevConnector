const express = require('express');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// @assess  Public

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error!');
  }
});

// @route   POST api/auth
// @desc    Authenticate users
// @assess  Public

router.post(
  '/',
  [
    check('email', 'Enter valid Email').isEmail(),
    check('password', 'Password required!').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Check if user exists
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.send({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('System Error!');
    }
  }
);

module.exports = router;
