const router = require('@app/routes/_generic/router');

const service = require('./service');
const app = router(service);

app.get('/:id/taskExecutions', async (req, res, next) => {
    const task = await taskService.findById(req.params.taskId);
    const executions = await service.findAllByTask(task);
    res.data = executions;
    next();
});

module.exports = app;