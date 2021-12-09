const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const UserValidation = require('../validation/User.validation');
const AuthService = require('./Auth.service');

module.exports = {
    list: async function(){
        const users = await User.find();
        return users;
    },
    login: async function(email, password){
        UserValidation.validateLogin(email, password);
        const existentUser = User.findOne({email: user.email});
        UserValidation.userNotExist(existentUser);
        
        return AuthService.authenticate(user, password);
          
     },
    get: async function(id){
       const user = await User.findOne({_id: id});
       return user;
    },
    post: async function(user){
        UserValidation.validate(user, existentUser);
        const existentUser = User.findOne({email: user.email});
        UserValidation.userExists(existentUser);

        user.password = await AuthService.generateCryptedPassword(user.password);
        
        user = await User.create(user);
        return user;
    },
    put: async function(user){
       user = await User.updateOne({_id: user._id}, user);
       return user;
    }, 
    remove: async function(id) {
        await User.deleteOne({_id:id});
    }
}