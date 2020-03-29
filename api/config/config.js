'use strict';

const config = () => {
    return {
        connectionString: 'mongodb+srv://guslarsen:guslarsen2020@cluster0-zno9q.mongodb.net/desappegdb',
        jtwKey: 'd41d8cd98f00b204e9800998ecf8427e',
        jwtExpiresIn: '3d'
    }
}

module.exports = config();