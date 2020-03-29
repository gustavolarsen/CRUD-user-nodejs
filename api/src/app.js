'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const dbConnection = require('../config/dbConnection');

const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');
const sessionsRoute = require('./routes/sessions');

const port = process.env.PORT || '3000';

console.log(`Aplicação rodando na porta ${port}`);

dbConnection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(indexRoute);
app.use(usersRoute);
app.use(sessionsRoute);

app.listen(port);

module.exports = app;


