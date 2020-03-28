'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const dbConnection = require('../config/dbConnection');

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

const port = process.env.PORT || '3000';

dbConnection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(port);

module.exports = app;


