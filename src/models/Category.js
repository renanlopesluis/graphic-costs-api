const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
    name: String,
    codigo: Number
});

module.exports = Category;