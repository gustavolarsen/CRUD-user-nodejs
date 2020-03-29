const jwt = require('jsonwebtoken');
const config = require('../../config/config');

module.exports = {

    async createToken(userId) {
        return await jwt.sign({ id: userId }, config.jtwKey, { expiresIn: config.jwtExpiresIn });
    },
}


