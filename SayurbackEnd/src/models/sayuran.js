'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sayuran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sayuran.init({
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    khasiat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'sayuran',
  });
  return sayuran;
};