const mongoose = require('mongoose');

const Service = mongoose.model('Service', {
    name: String,
    description: String,
    cost: Number
});

module.exports = Service;