const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

//const Book = require('../models/Book');

// GET all books
router.get('/', async (req, res) => {
  try {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${process.env.REACT_APP_NY_TIMES_API_KEY}`);
    const data = await response.json();
    console.log(data);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});


/* // POST a new book
router.post('/book', (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    review: req.body.review,
    rating: req.body.rating,
  });

  newBook.save().then(book => res.json(book));
}); */

module.exports = router;
