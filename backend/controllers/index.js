const express = require('express');
const router = express.Router();

router.use('/plaid', require('./plaidController'));

module.exports = router;