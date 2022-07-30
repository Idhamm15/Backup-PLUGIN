const mainRoutes = require('express').Router();
const authRoutes = require('./authRoutes');
const sayurRoutes = require ('./sayurRoutes');

mainRoutes.use('/sayur' ,sayurRoutes);
mainRoutes.use('/auth', authRoutes);

module.exports = mainRoutes