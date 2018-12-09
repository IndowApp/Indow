const express = require('express');
const router = express.Router();

router.use('/plaid', require('./plaidController'));
// router.use('/', require('./home'));

module.exports = router;