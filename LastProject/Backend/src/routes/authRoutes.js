const authRoutes = require('express').Router();
const authControllers = require('../controlers/authController')

authRoutes.post('/sign-up', authControllers.signup)
authRoutes.post('/sign-in', authControllers.signin)

module.exports = authRoutes