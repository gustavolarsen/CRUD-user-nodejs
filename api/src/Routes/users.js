'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.get('/', async (req, res) => {

    try {
        const data = await User.find({});
        return res.send(data);
    } catch (error) {
        return res.send({ message: `Erro na consulta de usuários. ${error}` });
    }
});

router.post('/create', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.send({ message: 'Email e senha são valores obrigatórios.' });
    }

    try {
        if (await User.findOne({ email }))
            return res.send({ message: 'Usuário já consta na base dados.' });

        const data = await User.create({ email, password });
        data.password = undefined;
        return res.send(data);

    } catch (error) {
        return res.send({ message: `Erro ao cadastrar o usuário. ${error}` });
    }
});

module.exports = router;