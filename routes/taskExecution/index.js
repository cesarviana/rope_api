const router = require('@app/routes/_generic/router');

const service = require('./service');
const taskService = require('@app/routes/task/service');
const userService = require('@app/routes/user/service');
const app = router(service);

app.get('/byTask/:taskId', async (req, res) => {
    const task = await taskService.findById(req.params.taskId);
    const executions = await service.findAllByTask(task);
    res.json(executions)
});

app.get('/byUser/:userId', async (req, res) => {
    const user = await userService.findById(req.params.userId);
    const executions = await service.findAllByUser(user);
    res.json(executions)
});

module.exports = app;