require('dotenv').config();
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
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
