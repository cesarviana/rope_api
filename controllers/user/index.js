const { Router } = require("express")

const express = require('express');
const router = express.Router();

router.post('/', (_, res) => {
    res.sendStatus(200)
})

module.exports = router