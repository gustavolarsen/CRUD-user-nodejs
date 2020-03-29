'use strict';

const User = require('../models/User');
const utils = require('../utils/utils');

module.exports = {

    async index(req, res) {

        try {
            const data = await User.find({});
            return res.send(data);
        } catch (error) {
            return res.send({ message: `Erro na consulta de usuários. ${error}` });
        }
    },

    async create(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.send({ message: 'Email e senha são valores obrigatórios.' });
        }

        try {
            if (await User.findOne({ email }))
                return res.send({ message: 'Usuário já consta na base dados.' });

            const data = await User.create({ email, password });
            data.password = undefined;
            return res.send({ data, token: await utils.createToken(data.id) });

        } catch (error) {
            return res.send({ message: `Erro ao cadastrar o usuário. ${error}` });
        }
    },

}