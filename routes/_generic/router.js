const express = require('express');

module.exports = (service) => {

    const router = express.Router();

    router.post('/', async (req, res, next) => {
        res.data = await service.save(req.body);
        next()
    });

    router.get('/:id', async (req, res, next) => {
        res.data = await service.findById(req.params.id);
        next()
    });

    router.get('/', async (req, res, next) => {
        res.data = await service.findAll();
        next()
    });

    return router;
};