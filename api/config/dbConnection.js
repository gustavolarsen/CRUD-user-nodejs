'use strict';

const mongoose = require('mongoose');
const config = require('./config');

module.exports = {

    connect() {

        const url = config.connectionString;
        const options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };

        mongoose.connect(url, options);

        mongoose.connection.on('error', (err) => {
            console.log(`Erro de conexão com banco de dados: ${err}`);
        });

        mongoose.connection.on('connected', () => {
            console.log('Aplicação conectada ao bando de dados.');
        });

        mongoose.connection.on('disconected', () => {
            console.log(`Aplicação desconectada do banco de dados: ${err}`);
        });
    }

}
