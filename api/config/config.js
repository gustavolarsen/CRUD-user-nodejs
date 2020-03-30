'use strict';

const config = () => {
    return {
        //para fins de segurança o usuario e senha da conexão foram removidos
        connectionString: 'mongodb+srv://<user>:<password>@cluster0-zno9q.mongodb.net/usersdb',
        jtwKey: 'd41d8cd98f00b204e9800998ecf8427e',
        jwtExpiresIn: '3d'
    }
}

module.exports = config();
