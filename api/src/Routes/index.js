'use strict';

const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.status(200).send({ message: `Todo ok com as rotas` });
});

module.exports = routes;