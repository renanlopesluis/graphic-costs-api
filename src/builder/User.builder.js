module.exports = {
    build: function(name, email, password, confirmPassword){
        return  {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword 
        }
    }
}
