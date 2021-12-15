const dayjs = require ('dayjs');
const RefreshToken = require('../models/RefreshToken');
const UserService = require('../service/User.service');
const UserValidation = require('../validation/User.validation');
const RefreshTokenBuilder = require('../builder/RefreshToken.builder');
const jwt = require('jsonwebtoken');
const expiresIn = dayjs().add(60, 'second').unix();

module.exports = {
    generateToken(user){
        const secret = process.env.SECRET;
        const token =  jwt.sign({}, secret, {
            subject: user._id,
            expiresIn: expiresIn}
        );
        return token;
    },
    checkToken(token){
        const secret = process.env.SECRET;
        jwt.verify(token, secret);
    },
    async refreshToken(userId){
        const user = await UserService.get(userId);
        UserValidation.checkIfUserExist(user);
        const newToken = await RefreshToken.create(RefreshTokenBuilder.build(user,expiresIn));
        return RefreshTokenBuilder.buildResponse(newToken);
    }
}