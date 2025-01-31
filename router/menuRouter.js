const { createMenu, getAllMenu, getOneMenu, updateStartersMenu, updateMainsMenu, updateDesertsMenu, deleteMenu } = require('../controller/menuController');
const menuRouter = require('express').Router();

menuRouter.post('/restaurant-menu/:id', createMenu);
menuRouter.get('/restaurant-menu', getAllMenu);
menuRouter.get('/restaurant-menu/:id', getOneMenu);
menuRouter.put('/restaurant-menu-starters/:id', updateStartersMenu);
menuRouter.put('/restaurant-menu-mains/:id', updateMainsMenu);
menuRouter.put('/restaurant-menu-deserts/:id', updateDesertsMenu);
menuRouter.delete('/restaurant-menu-deserts/:id', deleteMenu);

module.exports = menuRouter