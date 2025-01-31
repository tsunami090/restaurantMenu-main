'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('menus', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      restaurantId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'restaurants',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      starters: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      mains: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      deserts: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('menus');
  }
};
