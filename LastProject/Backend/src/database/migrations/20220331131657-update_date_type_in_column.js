'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.changeColumn('sayur','category', {
        type: Sequelize.INTEGER
      })
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sayur')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
