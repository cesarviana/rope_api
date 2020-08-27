const express = require('express');
const router = express.Router();

const service = require('./service');
const defaultActions = require('@app/routes/_generic/action');

router.post('/', async (req, res) => {
    await defaultActions.post(req, res, service);
});

module.exports = router;