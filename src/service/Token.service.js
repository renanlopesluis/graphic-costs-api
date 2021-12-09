const jwt = require('jsonwebtoken');

module.exports = {
    generateToken(user){
        const secret = process.env.SECRET;
        const token =  jwt.sign({id: user._id}, secret);
        return token;
    },

    checkToken(token){
        const secret = process.env.SECRET;
        jwt.verify(token, secret);
    }
}