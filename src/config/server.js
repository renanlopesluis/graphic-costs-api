module.exports = {
    init: function() {
        const bd = require('./bd');
        const express = require('express');
        const server = express();
        
        server.use(
            express.urlencoded({
                extended: true
            })
        )
        server.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            next();
        });
        server.use(express.json());

        bd.getMongoose().connect(bd.getUrl())
        .then(()=>{
            console.log('Database connected');
            server.listen(5000);
            }
        )
        .catch((error) => console.log(error))
    return server;
    }
}



