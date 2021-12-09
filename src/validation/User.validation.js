const User = require("../models/User");

function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

 function UserNotFoundException(message) {
    this.message = message;
    this.name = "UserNotFoundException";
}

function validateName(name){
    if(!name){
        throw new UserException("Name must be informed!");
    }
}

function validateEmail(email){
    if(!email){
        throw new UserException("Email must be informed!");
    }
}

function validatePassword(password){
    if(!password){
        throw new UserException("Password must be informed!");
    }
}

function validateConfirmPassword(confirmPassword, password){
    if(!confirmPassword){
        throw new UserException("You must confirm your password!");
    }

    if(password !== confirmPassword){
        throw new UserException("Passwords need to match");
    }
}

function userExists(user){
    if(user){
        throw new UserException("There is already an user with this email, please informe another one")
    }
}

function userNotExist(user){
    if(!user){
        throw new UserNotFoundException("User not found on our database!")
    }
}

module.exports = {
    validate: function(user){
    validateName(user.name);
    validateEmail(user.email);
    validatePassword(user.password);
    validateConfirmPassword(user.confirmPassword, user.password)
    userExists(user)
        
    },
    userExists: function(user){
        userExists(user);
    },
    userNotExist: function(user){
        userNotExist(user);
    },
    validateLogin(email, password){
        validateEmail(email);
        validatePassword(password);
    }
}