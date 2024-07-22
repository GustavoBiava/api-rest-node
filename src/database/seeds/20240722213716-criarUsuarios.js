const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'John',
      email: 'john@email.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Joana',
      email: 'joana@email.com',
      password_hash: await bcryptjs.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Paul',
      email: 'paul@email.com',
      password_hash: await bcryptjs.hash('112233', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down() { }
};
