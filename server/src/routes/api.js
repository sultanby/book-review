const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
require('dotenv').config();


//const Book = require('../models/Book');
const User = require('../model/User');

// GET all books
router.get('/', async (req, res) => {
  console.log('here');
  try {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`);
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});


//POST a new user
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    //validator
    if (!email || !password || !username) {
      throw Error('All  fields must be filled');
    }
    if (!validator.isEmail(email)) {
      throw Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
      throw Error('Password is not not strong enough');
    }

    // Check if user already exists
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      throw Error('Username already in use');
    }

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw Error('Email already in use');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({ username, password: hashedPassword, email });
    await user.save().catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Error saving user' });
    });

    //Generating the token
    const token = jwt.sign({ username: user.username }, process.env.REACT_APP_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token , username: username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password) {
      throw Error('All fields must be filled')
    }

    // Find the user in the database
    const user = await User.findOne({ email });
    if (!user) {
      throw Error('Invalid email')
    }

    // Check the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw Error('Invalid password')
    }

    // The user is authenticated, create a token and send a success response
    const token = jwt.sign({ username: user.username }, process.env.REACT_APP_SECRET, { expiresIn: '1h' });
    const username = user.username
    res.status(200).json({ token , username });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
