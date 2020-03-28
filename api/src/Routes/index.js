const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    return res.send({ message: `Todo ok com as rotas` });
});

module.exports = router;