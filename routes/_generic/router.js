const express = require('express');
const router = express.Router();

module.exports = service => {

    router.post('/', async (req, res) => {
        try {
            const saved = await service.save(req.body);
            res.json(saved)
        } catch (error) {
            res.sendStatus(400)
        }
    });

    return router;
};