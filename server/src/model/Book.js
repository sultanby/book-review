const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  isbn: { type: String, unique: true },
  imageUrl: String,
  officialNYTReviewUrl: String
});

module.exports = Book = mongoose.model('book', BookSchema);
