const express = require('express');

module.exports = (service, responseWrapper) => {

    const router = express.Router();

    router.post('/', async (req, res, next) => {
        res.data = await service.save(req.body);
        next()
    });

    router.get('/:id', async (req, res, next) => {
        res.data = await service.findById(req.params.id);
        if(responseWrapper)
            res.data = responseWrapper.wrapObject(res.data);
        next()
    });

    router.get('/', async (req, res, next) => {
        res.data = await service.findAll();
        if(responseWrapper)
            res.data = responseWrapper.wrapList(res.data);
        next()
    });

    return router;
};