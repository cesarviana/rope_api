const router = require('@app/routes/_generic/router');
const assert = require('assert');
const service = require('./service');
const executionService = require('@app/routes/taskExecutions/service');
const app = router(service);

app.get('/byTaskExecution/:executionId', async (req, res, next) => {
    const executionId = req.params.executionId;
    const execution = await executionService.findById(executionId);
    assert(execution !== null, `The execution was not found (id:${executionId})`);
    const interactions = await service.findAllByExecution(execution);
    res.data = interactions;
    next();
});

module.exports = app;