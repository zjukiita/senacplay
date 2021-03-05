'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Filme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Filme.init({
    nome: DataTypes.STRING,
    imagem: DataTypes.STRING,
    sinopse: DataTypes.STRING,
    duracao: DataTypes.TIME,
    link: DataTypes.STRING,
    trailer: DataTypes.STRING,
    avaliacao: DataTypes.FLOAT,
    anoDeLancamento: DataTypes.INTEGER,
    categoria: DataTypes.STRING,
    classificacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Filme',
  });
  return Filme;
};