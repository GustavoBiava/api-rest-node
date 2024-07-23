import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

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
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`;
        },
      },
    },
    { sequelize, tableName: 'fotos' });
    return this;
  }
}
