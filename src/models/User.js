const mongoose = require('mongoose');
const schema = mongoose.Schema;

const User = mongoose.model('User', {
    name: String,
    email: String,
    password: String,
    refreshToken: { type: schema.Types.ObjectId, ref: 'RefreshToken'}
});

module.exports = User;