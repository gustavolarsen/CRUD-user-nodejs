'use strict';

const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

routes.get('/users', auth, userController.index);
routes.get('/users/:id', userController.show);
routes.post('/users/create', userController.create);
routes.put('/users/edit/:id', userController.update);

module.exports = routes;