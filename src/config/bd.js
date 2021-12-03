const user = 'renanl';
const password = encodeURIComponent('Bl4ckH0l3Sun');
const connectionUrl = `mongodb+srv://${user}:${password}@cluster0.gadqx.mongodb.net/apiDataBase?retryWrites=true&w=majority`;
const mongoose = require('mongoose');
module.exports = {
    getMongoose: function(){
        return mongoose;
    },
    getUrl: function (){
        return connectionUrl;
    }
}
