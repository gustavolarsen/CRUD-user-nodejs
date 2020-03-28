const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    return res.send({ message: `Todo ok com as rotas de usuarios` });
});

module.exports = router;