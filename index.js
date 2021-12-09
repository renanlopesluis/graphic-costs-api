const serverConfig = require('./src/config/server');
const projectController = require('./src/controller/Project.controller');
const categoryController = require('./src/controller/Category.controller');
const serviceController = require('./src/controller/Service.controller');
const userController = require('./src/controller/User.controller');

const server = serverConfig.init();

projectController.api(server);
categoryController.api(server);
serviceController.api(server);
userController.api(server);