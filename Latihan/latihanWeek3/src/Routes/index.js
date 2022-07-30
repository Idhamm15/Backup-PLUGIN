const mainRoutes = require('express').Router();
const authRoutes = require('./authRoutes');
const foodsRoutes = require ('./foodRoutes');

mainRoutes.use('/foods', foodsRoutes);
mainRoutes.use('/auth', authRoutes)

module.exports = mainRoutes