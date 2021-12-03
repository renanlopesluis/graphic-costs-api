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



