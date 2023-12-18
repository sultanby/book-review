const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 email: { type: String, unique: true, required: true },
 password: { type: String, required: true },
 username: String
});

module.exports = mongoose.model('User', UserSchema);
