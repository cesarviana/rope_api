const express = require('express');

module.exports = service => {

    const router = express.Router();

    router.post('/', async (req, res, next) => {
        res.data = await service.save(req.body);
        next()
    });

    router.get('/', async (req, res, next) => {
        res.data = await service.findAll();
        next()
    });

    return router;
};