module.exports = {
    build: function(id, name, description, cost){
        return  {
            _id: id,
            name: name,
            description: description,
            cost: cost
        }
    }
}
