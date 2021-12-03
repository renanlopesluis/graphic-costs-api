const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Project = mongoose.model('Project', {
    name: String,
    budget: Number,
    cost: Number,
    category: { type: schema.Types.ObjectId, ref: 'Category'},
    services: [{ type: schema.Types.ObjectId, ref: 'Service'}]
});

module.exports = Project;