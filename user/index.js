const { Router } = require("express")

const express = require('express');
const router = express.Router();

const service = require('./service')

router.post('/', (req, res) => {
    try {
        service.save(req.body)   
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(400)
    }
})

module.exports = router