import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Tamanho de nome inválido! (3 - 255)',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'Tamanho de sobrenome inválido! (3 - 255)',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        unique: {
          msg: 'Email já existente',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido!',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        allowNull: false,
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro!',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'Peso precisa ser um número inteiro ou de ponto flutuante!',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'Altura precisa ser um número inteiro ou de ponto flutuante!',
          },
        },
      },
    },
    { sequelize });
    return this;
  }
}
