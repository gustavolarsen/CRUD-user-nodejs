const jwt = require('jsonwebtoken');

module.exports = {

    async createToken(userId) {
        return await jwt.sign({ id: userId }, 'SJDiojaisdj@340', { expiresIn: '3d' });
    },
}


