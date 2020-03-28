'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const dbConnection = require('../config/dbConnection');

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');
const usersAuth = require('./Routes/auth');

const port = process.env.PORT || '3000';

console.log(`Aplicação rodando na porta ${port}`);

dbConnection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoute);
app.use('/users', usersRoute);
app.use('/auth', usersAuth);

app.listen(port);

module.exports = app;


