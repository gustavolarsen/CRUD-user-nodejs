'use strict'

const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const User = require('../models/User');

router.post('/', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, data) => {
        if (err) {
            return res.send({ error: 'Erro ao autenticar o usuário. ' + err });
        }

        //Se informou um email invalido.    
        if (!data) {
            return res.send({ error: 'Usuário ou senha inválidos.' });
        }

        console.log(data);

        //valida senha informada com senha do banco de dados
        bcrypt.compare(password, data.password, (err, same) => {

            if (err) {
                return res.send({ error: 'Erro ao autenticar o usuário. ' + err })
            }
            //se senha invalida
            if (!same) {
                return res.send({ error: 'Usuário ou senha inválidos 1.' });
            }

            return res.send(data);
        });
    }).select('+password');

});

module.exports = router;