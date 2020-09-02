const router = require('@app/routes/_generic/router');
const assert = require('assert');
const service = require('./service');
const executionService = require('@app/routes/taskExecution/service');
const app = router(service);

app.get('/byExecution/:executionId', async (req, res) => {
    const executionId = req.params.executionId;
    const execution = await executionService.findById(executionId);
    assert(execution !== null, `The execution was not found (id:${executionId})`);
    const interactions = await service.findAllByExecution(execution);
    res.json(interactions);
});

module.exports = app;