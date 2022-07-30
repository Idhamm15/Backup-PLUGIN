const authroutes = require('express').Router();
const authControllers  = require('../Controller/authControllers')

authroutes.post('/sign-in', authControllers.signin);
authroutes.post('/sign-up', authControllers.signup);

module.exports = authroutes