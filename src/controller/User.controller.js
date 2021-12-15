module.exports = {
    api: function (srv) {
        const userService = require('../service/User.service');
        const tokenService = require('../service/Token.service');

        const server = srv; ;
        
        function checkToken(req, res, next){
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(" ")[1];
            if(!token){
                return res.status(401).json({message: 'Access denied!'});
            }
            try {
                tokenService.checkToken(token);
                next();
            } catch (error) {
                res.status(400).json({message: 'Invalid Token!'});
            }
        }

        server.get('/graphicapi/users/:id', checkToken, async (req, res) => {
            try {
                const { id } = req.params;
                const user = await userService.get(id);
                if(!user){
                    res.status(404).json({message: 'User not found!'});
                    return;
                }
                res.status(200).json(user);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.post('/graphicapi/auth/register', async (req, res) => {
            const {name, email, password, confirmPassword} = req.body;
            try {
                const UserBuilder = require('../builder/User.builder');
                
                const user = userService.post(UserBuilder.build(name, email, password, confirmPassword));
                res.status(201).json(user);
            } catch (error) {
                error instanceof UserException ? 
                res.status(422).json({error: error}) :
                res.status(500).json({error: error});
            }
        });

        server.post('/graphicapi/auth/login', async (req, res) => {
            const { email, password } = req.body;
            try {
                const token = userService.login(email, password);
                res.status(200).json({message: 'User successfully logged', token});
            } catch (error) {
                if(error instanceof UserException){
                    res.status(422).json({error: error}) 
                } else if(error instanceof AuthenticationException) {
                    res.status(404).json({error: error}) 
                }
                res.status(500).json({error: error});
            }
        });

        server.get('/graphicapi/auth/refresh-token/:id', async (req, res) => {
            const { id } = req.params;
            console.log(id)
            try {
                const token = await tokenService.refreshToken(id);
                res.status(200).json({message: 'User successfully logged', token});
            } catch (error) {
                res.status(401).json({error: `Unauthorized Access: ${error}`});
            }
        });
    }
}