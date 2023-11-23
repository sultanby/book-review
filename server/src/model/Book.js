const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  review: { type: String },
});

module.exports = Book = mongoose.model('book', BookSchema);
