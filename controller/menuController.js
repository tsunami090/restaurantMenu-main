const { where } = require('sequelize');
const menuModel = require('../models/menu');
const restaurantModel = require('../models/restaurant');

exports.createMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const checkId = await restaurantModel.findOne({ where: { id: id } });

    if (!checkId) {
      return res.status(404).json('Restaurant not found');
    }

    const newId = Math.floor(Math.random() * 1000000);
    const { starters, mains, deserts } = req.body;

    const data = {
      id: newId,
      restaurantId: checkId.id,
      starters,
      mains,
      deserts
    }

    const menu = await menuModel.create(data);
    res.status(201).json({
      message: `Menu created for ${checkId.restaurantName} successfully`,
      data: menu
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}

exports.getAllMenu = async (req, res) => {
  try {
    const allMenu = await menuModel.findAll();
    res.status(200).json({
      message: 'Check all menus below',
      data: allMenu
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}

exports.getOneMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const checkId = await menuModel.findOne({ where: { restaurantId: id } });

    if (!checkId) {
      return res.status(404).json('Restaurant not found');
    }

    const menu = await menuModel.findOne({ where: { restaurantId: checkId.dataValues.restaurantId } });
    res.status(200).json({
      message: 'Check the menu below',
      data: menu
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}

exports.updateStartersMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const checkId = await menuModel.findOne({ where: { restaurantId: id } });

    if (!checkId) {
      return res.status(404).json('Restaurant not found');
    }

    const { starters } = req.body;

    const update = {
      starters: {
        name: starters.name,
        price: starters.price,
        description: starters.description,
        dailySpecials: starters.dailySpecials
      }
    }

    const newUpdate = await menuModel.update(update, { where: { restaurantId: checkId.dataValues.restaurantId } });
    res.status(200).json('Starters Menu updated successfully');
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}


exports.updateMainsMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const checkId = await menuModel.findOne({ where: { restaurantId: id } });

    if (!checkId) {
      return res.status(404).json('Restaurant not found');
    }

    const { mains } = req.body;

    const update = {
      mains: {
        name: mains.name,
        price: mains.price,
        description: mains.description,
        dailySpecials: mains.dailySpecials
      }
    }

    const newUpdate = await menuModel.update(update, { where: { restaurantId: checkId.dataValues.restaurantId } });
    res.status(200).json('Mains Menu updated successfully');
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}


exports.updateDesertsMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const checkId = await menuModel.findOne({ where: { restaurantId: id } });

    if (!checkId) {
      return res.status(404).json('Restaurant not found');
    }

    const { deserts } = req.body;

    const update = {
      deserts: {
        name: deserts.name,
        price: deserts.price,
        description: deserts.description,
        dailySpecials: deserts.dailySpecials
      }
    }

    const newUpdate = await menuModel.update(update, { where: { restaurantId: checkId.dataValues.restaurantId } });
    res.status(200).json('Deserts Menu updated successfully');
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}


exports.deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const checkId = await menuModel.findOne({ where: { restaurantId: id } });

    if (!checkId) {
      return res.status(404).json('Restaurant not found');
    }

    const deleteMenu = await menuModel.destroy({ where: { restaurantId: id } });
    res.status(200).json('Menu deleted successfully')
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}
