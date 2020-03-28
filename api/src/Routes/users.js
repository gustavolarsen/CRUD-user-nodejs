'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            return res.send({ error: 'Erro na consulta de usuários!' });
        }

        return res.send(data);
    });
});

router.post('/create', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.send({ error: 'Email e senha são valores obrigatórios.' });
    }

    User.findOne({ email }, (err, data) => {
        if (err) {
            return res.send({ error: 'Erro ao consultar usuário.' });
        }

        if (data) {
            return res.send({ error: 'Usuário já consta na base dados.' });
        }

        User.create({ email, password }, (err, data) => {
            if (err) {
                return res.send({ error: 'Erro ao cadastrar o usuário.' });
            }

            data.password = undefined;
            return res.send(data);
        });
    });

});

module.exports = router;