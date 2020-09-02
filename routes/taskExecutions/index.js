const router = require('@app/routes/_generic/router');

const service = require('./service');
const taskService = require('@app/routes/tasks/service');
const userService = require('@app/routes/users/service');
const app = router(service);

app.get('/byTask/:taskId', async (req, res, next) => {
    const task = await taskService.findById(req.params.taskId);
    const executions = await service.findAllByTask(task);
    res.data = executions;
    next();
});

app.get('/byUser/:userId', async (req, res, next) => {
    const user = await userService.findById(req.params.userId);
    const executions = await service.findAllByUser(user);
    res.data = executions;
    next();
});

module.exports = app;