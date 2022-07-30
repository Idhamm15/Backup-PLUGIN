const foodsRoutes = require('express').Router();
const foodsControllers = require('../controlers/sayurControler')
const uploadMiddleware = require("../helpers/uploadMiddleware")
const cloudinaryMiddleware = require ("../helpers/cloudinaryMiddleware")
const authMiddleware = require("../helpers/authmiddleware") 

foodsRoutes.get('/',
// authMiddleware.checkLogin,
foodsControllers.getAll);
foodsRoutes.post('/',uploadMiddleware,cloudinaryMiddleware,sayurControllers.postSayur);
foodsRoutes.put('/:id',uploadMiddleware,cloudinaryMiddleware,sayurControllers.editSayur);
foodsRoutes.delete('/:id',sayurControllers.deleteFoods);
foodsRoutes.get('/:id',sayurControllers.getSayursByID);


module.exports = sayurRoutes