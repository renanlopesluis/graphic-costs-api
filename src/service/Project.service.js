const Project = require('../models/Project');

module.exports = {
    list: async function(){
        const projects = await Project.find().populate('category services');
        return projects;
    },
    get: async function(id){
       const project = await Project.findOne({_id: id}).populate('category services');
       return project;
    },
    post: async function(project){
        project = await Project.create(project);
        return project;
    },
    put: async function(project){
       project = await Project.updateOne({_id: project._id}, project);
       return project;
    }, 
    remove: async function(id) {
        await Project.deleteOne({_id:id});
    }
}