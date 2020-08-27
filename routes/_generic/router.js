const express = require('express');

module.exports = service => {

    const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            const saved = await service.save(req.body);
            res.json(saved)
        } catch (error) {
            res.status(400).send(error)
        }
    });

    return router;
};