'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pessoas.hasMany(models.turmas,{ foreignKey: 'docente_id' });
      pessoas.hasMany(models.matriculas,{ foreignKey: 'estudante_id' });
    }
  };
  pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pessoas',
  });
  return pessoas;
};