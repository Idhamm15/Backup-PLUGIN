const sayurRoutes = require('express').Router();
const sayurcontroller = require('../controller/sayurcontroller');
const authMiddleware = require('../helpers/authMiddleware');

sayurRoutes.get('/', authMiddleware.checkLogin ,sayurcontroller.getAll);
sayurRoutes.post('/',sayurcontroller.postsayur);

module.exports = sayurRoutes
