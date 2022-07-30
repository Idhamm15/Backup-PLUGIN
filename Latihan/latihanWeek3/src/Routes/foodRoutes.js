const foodRoutes = require('express').Router();
const foodController = require('../Controller/foodController');
const authMiddleware = require('../helpers/authMiddleware')
const uploadMiddleware = require("../helpers/uploadMiddleware")
const cloudinaryMiddleware = require("../helpers/cloudinaryMiddleware")

foodRoutes.get("/", foodController.getAllFoods)
foodRoutes.post("/", uploadMiddleware, cloudinaryMiddleware, foodController.postData)

module.exports = foodRoutes;