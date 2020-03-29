'use strict'

const express = require('express');
const routes = express.Router();

const User = require('../models/User');

const sessionController = require('../controllers/sessionController');

routes.post('/sessions', sessionController.create);

module.exports = routes;