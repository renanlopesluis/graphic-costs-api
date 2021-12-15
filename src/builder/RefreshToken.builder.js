module.exports = {
    build: function(user, expiresIn){
        return  {
            user: user,
            expiresIn: expiresIn
        }
    },

    buildResponse(token){
        return {
            id: token._id,
            expiresIn: token.expiresIn
        }
    }
}
