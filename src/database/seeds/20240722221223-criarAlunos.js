/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('alunos', [{
      nome: 'João',
      sobrenome: 'Silva',
      email: 'joaos@email.com',
      idade: 13,
      peso: 55,
      altura: 1.67,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Maria',
      sobrenome: 'Lopes',
      email: 'marial@email.com',
      idade: 12,
      peso: 51,
      altura: 1.54,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Guilherme',
      sobrenome: 'Milano',
      email: 'guilhermem@email.com',
      idade: 13,
      peso: 57,
      altura: 1.65,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down () { }
};
