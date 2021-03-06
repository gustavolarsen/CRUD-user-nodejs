'use strict'

const bcrypt = require('bcrypt');
const User = require('../models/User');
const utils = require('../utils/utils');

module.exports = {

    async create(req, res) {

        const { email, password } = req.body;

        try {
            const data = await User.findOne({ email }).select('+password');;

            //Se informou um email invalido.    
            if (!data) {
                return res.status(401).send({ error: 'Usuário ou senha inválidos.' });
            }
            //valida senha informada com senha do banco de dados
            if (!await bcrypt.compare(password, data.password))
                return res.status(401).send({ error: 'Usuário ou senha inválidos.' });

            data.password = undefined;

            return res.status(200).send({ data, token: await utils.createToken(data.id) });

        } catch (error) {
            return res.status(500).send({ error: `Erro ao autenticar o usuário. ${error}` });
        }
    }
}
