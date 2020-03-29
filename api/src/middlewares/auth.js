const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    const tokenHeader = req.headers.auth;

    if (!tokenHeader) {
        return res.send({ error: 'Token não enviado.' });
    }

    jwt.verify(tokenHeader, 'SJDiojaisdj@340', (err, decoded) => {
        if (err) {
            return res.send({ error: 'Token inválido.' });
        }
        return next();
    });
}

module.exports = auth;