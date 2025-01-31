const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')

class menu extends Model {}

menu.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    restaurantId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'restaurants',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    starters: {
      type: DataTypes.JSON,
      allowNull: false
    },
    mains: {
      type: DataTypes.JSON,
      allowNull: false
    },
    deserts: {
      type: DataTypes.JSON,
      allowNull: false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'menu', // We need to choose the model name
    tableName: 'menus',
    timestamps: true
  },
);

module.exports = menu