const bcrypt = require('bcrypt');

function AuthenticationException(message) {
    this.message = message;
    this.name = "UserException";
}

module.exports = {
    generateCryptedPassword: async function(password){
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt);
        return passwordHash;
    },
    authenticate: async function(user, password){
        const checkPassword = await bcrypt.compare(password, user.password);

        if(!checkPassword) throw new AuthenticationException("Error when trying to authenticate user! User not found!");
        
        const tokenService = require('./Token.service');

        return tokenService.generateToken(user);
    }
}