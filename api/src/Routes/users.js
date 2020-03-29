'use strict';

const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');
const auth = require('../middlewares/auth');

routes.get('/users', auth, userController.index);
routes.post('/users/create', userController.create);

module.exports = routes;