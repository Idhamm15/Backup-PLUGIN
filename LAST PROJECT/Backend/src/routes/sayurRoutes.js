const sayurRoutes = require('express').Router();
const sayurControllers = require('../controlers/sayurControler')
const uploadMiddleware = require("../helpers/uploadMiddleware")
const cloudinaryMiddleware = require ("../helpers/cloudinaryMiddleware")
const authMiddleware = require("../helpers/authmiddleware") 

sayurRoutes.get('/',
// authMiddleware.checkLogin,
sayurControllers.getAll);
sayurRoutes.post('/',
// authMiddleware.checkLogin,uploadMiddleware,cloudinaryMiddleware,
sayurControllers.postSayur);
sayurRoutes.put('/:id',authMiddleware.checkLogin,sayurControllers.editSayur);
sayurRoutes.delete('/:id',authMiddleware.checkLogin,sayurControllers.deleteSayur);
sayurRoutes.get('/:id',authMiddleware.checkLogin,sayurControllers.getSayurByID);


module.exports = sayurRoutes