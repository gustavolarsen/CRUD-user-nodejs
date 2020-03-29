'use strict';

const bcrypt = require('bcrypt');

const User = require('../models/User');
const utils = require('../utils/utils');

module.exports = {

    async index(req, res) {

        try {
            const data = await User.find({});
            return res.status(200).send(data);
        } catch (error) {
            return res.status(500).send({ message: `Erro na consulta de usuários. ${error}` });
        }
    },

    async show(req, res) {

        const { id } = req.params;

        try {
            const data = await User.findById(id);
            return res.status(200).send(data);

        } catch (error) {
            return res.status(500).send({ message: `Erro na consulta do usuário. ${error}` });
        }

    },

    async create(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ message: 'Email e senha são valores obrigatórios.' });
        }

        try {
            if (await User.findOne({ email }))
                return res.status(400).send({ message: 'Usuário já consta na base dados.' });

            const data = await User.create({ email, password: await bcrypt.hash(password, 10) });
            data.password = undefined;
            return res.status(201).send({ data, token: await utils.createToken(data.id) });

        } catch (error) {
            return res.status(500).send({ message: `Erro ao cadastrar o usuário. ${error}` });
        }
    },

    async update(req, res) {

        const { newPassword, confirmPassword, oldPassword } = req.body;
        const { id } = req.params;

        if (newPassword !== confirmPassword) {
            return res.status(400).send({ error: 'A nova senha não conrresponde com a confirmação' });
        }

        try {
            const data = await User.findById(id).select('+password');

            if (!data) {
                return res.status(400).send({ error: 'Usuário não encantrado.' });
            }

            if (!await bcrypt.compare(oldPassword, data.password)) {
                return res.status(400).send({ error: 'A senha antiga está incorreta.' });
            }

            await User.updateOne({ _id: id }, { $set: { password: await bcrypt.hash(newPassword, 10) } });
            return res.status(200).send({ message: 'Usuário atualiazado com sucesso' });

        } catch (error) {
            return res.status(500).send({ error: `Erro ao editar o usuário. ${error}` });
        }

    },

    async delete(req, res) {

    },

}