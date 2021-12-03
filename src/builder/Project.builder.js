module.exports = {
    build: function(id, name, budget, cost, category, services){
        return  {
            _id: id,
            name: name,
            budget: budget,
            cost: cost,
            category: category,
            services: services
        }
    }
}
