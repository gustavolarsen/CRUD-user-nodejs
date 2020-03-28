'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const { nome, idade } = req.query;
    return res.send({ message: `Eu sou ${nome} e tenho ${idade} anos.` });
});


app.listen('3333');

module.exports = app;


