const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RefreshToken = mongoose.model('RefreshToken', {
    user: { type: schema.Types.ObjectId, ref: 'User', required: true},
    expiresIn:  Number
});

module.exports = RefreshToken;