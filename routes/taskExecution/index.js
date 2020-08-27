const express = require('express');
const router = express.Router();

const service = require('./service');
const defaultActions = require('../_defaultActions.js');

router.post('/', async (req, res) => {
    await defaultActions.post(req, res, service);
});

module.exports = router;