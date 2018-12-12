const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: '✅ Successfully hit the backend root!'
    });
});

module.exports = router;