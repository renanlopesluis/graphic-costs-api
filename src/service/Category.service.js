const Category = require('../models/Category');

module.exports = {
    list: async function(){
        const categories = await Category.find().then();
        return categories;
    },
    get: async function(id){
       const category = await Category.findOne({_id: id});
       return category;
    },
    post: async function(category){
        category = await Category.create(category);
        return category;
    },
    put: async function(category){
       category = await Category.updateOne({_id: category._id}, category);
       return category;
    }, 
    remove: async function(id) {
        await Category.deleteOne({_id:id});
    }
}