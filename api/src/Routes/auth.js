'use strict'

const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');

const User = require('../models/User');

router.post('/', async (req, res) => {

    const { email, password } = req.body;

    try {
        const data = await User.findOne({ email }).select('+password');;

        //Se informou um email invalido.    
        if (!data) {
            return res.send({ error: 'Usuário ou senha inválidos.' });
        }
        //valida senha informada com senha do banco de dados
        if (!await bcrypt.compare(password, data.password))
            return res.send({ error: 'Usuário ou senha inválidos.' });

        data.password = undefined;
        return res.send(data);

    } catch (error) {
        return res.send({ error: `Erro ao autenticar o usuário. ${error}` });
    }
});

module.exports = router;