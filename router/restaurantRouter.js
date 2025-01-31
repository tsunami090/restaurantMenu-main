const { createRestaurant, getAllRestaurant, getOneRestaurant, getRestaurantByOne, updateRestaurantName, deleteRestaurantId  } = require('../controller/restaurantController');

const restaurantRouter = require('express').Router();

restaurantRouter.post('/restaurant', createRestaurant)
restaurantRouter.get('/restaurant', getAllRestaurant)
restaurantRouter.get('/restaurant/:id', getRestaurantByOne)
restaurantRouter.put('/restaurant/:id', updateRestaurantName)
restaurantRouter.delete('/restaurant/:id', deleteRestaurantId)
module.exports = restaurantRouter