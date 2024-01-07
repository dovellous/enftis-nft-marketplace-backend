const express = require('express');

const router = express.Router()

const apiV1 = require('../hmvc/apiV1');

router.use('/v1', apiV1)

router.get('/', welcome);

function welcome(req, res) {
    return res
        .status(200)
        .send("<html><head><style>body{font-family: 'arial';}</style></head><body><h1>ENFTIS SERVER 1.0.0</h1><p><strong><a href='./v1'>Open Version 1 APIs</a></strong></p></body></html>");
}

module.exports = router;