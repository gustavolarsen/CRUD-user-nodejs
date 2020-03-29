'use strict';

const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send({ message: `Todo ok com as rotas` });
});

module.exports = routes;