const { where } = require('sequelize');
const restaurantModel = require('../models/restaurant');
const { v4: uuidv4 } = require('uuid');

exports.createRestaurant = async (req, res) => {
  try {
    const firstRandomNum = Math.floor(Math.random() * 1000);
    const secondRandomNum = Math.floor(Math.random() * 100);
    const id = 'RES' + firstRandomNum + 'FD' + secondRandomNum;
    const { restaurantName, email, location } = req.body;
    const data = {
      id: id,
      restaurantName,
      email,
      location
    }
    const new_restaurant = await restaurantModel.create(data);
    res.status(201).json({
      message: 'Restaurant Created Successfully',
      data: new_restaurant
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}

exports.getAllRestaurant = async (req, res) => {
  try {
    const allRestaurant = await restaurantModel.findAll();
    res.status(200).json({
      message: 'check all restaurants below',
      data: allRestaurant
    });
  } catch (error) {
    res.status(500).json({
      message: 'internal server error',
      error: error.message
    });
  }
}

exports.getRestaurantByOne = async (req, res) => {
  try {
    const { id } = req.params;
    const oneRestaurant = await restaurantModel.findAll({ where: { id: id } });

    if (oneRestaurant.length == 0) {
      return res.status(400).json('Invalid restaurant ID')
    }

    res.status(200).json({
      message: 'check restaurant below',
      data: oneRestaurant
    })
  } catch (error) {
    res.status(500).json({
      message: 'internal server error',
      error: error.message
    });
  }
}

exports.updateRestaurantName = async (req, res) => {
  try {
    const { id } = req.params;
    const { restaurantName } = req.body;
    const checkId = await restaurantModel.findOne({ where: { id: id } });    

    if (!checkId) {
      return res.status(404).json('Restaurant does not exists')
    }

    const update = { restaurantName }
    const updatedName = await restaurantModel.update(update, { where: { id: checkId.dataValues.id } })
    res.status(200).json(`restaurant name has been updated to ${restaurantName}`)
  } catch (error) {
    res.status(500).json({
      message: 'internal server error',
      data: error.message
    });
  }
}

exports.deleteRestaurantId = async (req, res) => {
  try {
    const { id } = req.params;
    const checkId = await restaurantModel.findOne({ where: { id: id } });
    console.log(checkId);
    
    if (!checkId) {
      return res.status(400).json('Restaurant does not exists')
    }
    await restaurantModel.destroy({where: {id: checkId.dataValues.id}});
    res.status(200).json('Deleted successfully')
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      error: error.message
    });
  }
}
