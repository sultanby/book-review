const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
 user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
 reviewText: String
});

module.exports = mongoose.model('Review', ReviewSchema);
