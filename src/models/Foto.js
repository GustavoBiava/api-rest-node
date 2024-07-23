import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      original_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio!',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio!',
          },
        },
      },
    },
    { sequelize, tableName: 'fotos' });
    return this;
  }
}
