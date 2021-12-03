const Service = require('../models/Service');

module.exports = {
    list: async function(){
        const services = await Service.find();
        return services;
    },
    get: async function(id){
       const service = await Service.findOne({_id: id});
       return service;
    },
    post: async function(service){
        service = await Service.create(service);
        return service;
    },
    put: async function(service){
       service = await Service.updateOne({_id: service._id}, service);
       return service;
    }, 
    remove: async function(id) {
        await Service.deleteOne({_id:id});
    }
}