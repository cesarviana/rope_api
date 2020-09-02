const express = require('express');

module.exports = service => {

    const router = express.Router();

    router.post('/', async (req, res) => {
        const saved = await service.save(req.body);
        res.json(saved)
    });

    router.get('/', async (req, res) => {
        const list = await service.findAll();
        res.json(list)
    });

    return router;
};