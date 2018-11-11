const express = require('express');
const router = express.Router();

router.use('/plaid', require('./plaid_controller'));

module.exports = router;