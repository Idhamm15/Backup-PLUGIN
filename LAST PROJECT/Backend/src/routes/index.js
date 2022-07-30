const mainRoutes = require('express').Router();
const authRoutes = require('./authRoutes');
const foodsRoutes = require ('./sayurRoutes');

mainRoutes.use('/sayur' ,foodsRoutes);
mainRoutes.use('/auth', authRoutes)

module.exports = mainRoutes