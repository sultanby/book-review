const mongoose = require('mongoose');

const SavedBookSchema = new mongoose.Schema({
 user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
 book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }
});

module.exports = mongoose.model('SavedBook', SavedBookSchema);
