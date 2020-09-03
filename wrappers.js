/*
 * Wrap responses adding links to make api navigable.
 */

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const url = getUrl();
    res.json({
        data: 'Hello',
        links: {
            users: `${url}/users`,
            interactions: `${url}/interactions`,
            tasks: `${url}/tasks`,
            taskExecutions: `${url}/taskExecutions`,
        }
    })
});

const listWrappersConfigs = [
    {path: '/users', createLinkFunction: createUserLinks},
    {path: '/taskExecutions/byUser/:id', createLinkFunction: createTaskExecutionLinks},
    {path: '/taskExecutions/byTask/:id', createLinkFunction: createTaskExecutionLinks},
    {path: '/taskExecutions', createLinkFunction: createTaskExecutionLinks},
    {path: '/tasks', createLinkFunction: createTaskLinks},
    {path: '/interactions', createLinkFunction: createInteractionLinks},
    {path: '/interactions/byTaskExecution/:id', createLinkFunction: createInteractionLinks},
];

listWrappersConfigs.forEach(wrapper => router.get(wrapper.path, (req, res, next) => {
    wrappListResponse(req, res, next, wrapper.createLinkFunction)
}));

const objectWrappersConfigs = [
    {path: '/users/:id', createLinkFunction: createUserLinks},
    {path: '/tasks/:id', createLinkFunction: createTaskLinks},
    {path: '/taskExecutions/:id', createLinkFunction: createTaskExecutionLinks},
    {path: '/interactions/:id', createLinkFunction: createInteractionLinks},
];

objectWrappersConfigs.forEach(wrapper => router.get(wrapper.path, (req, res, next) => {
    wrappObjectResponse(req, res, next, wrapper.createLinkFunction)
}));

function createTaskExecutionLinks(url, taskExecution) {
    return {
        href: `${url}/taskExecutions/${taskExecution.id}`,
        list: `${url}/taskExecutions`,
        user: `${url}/users/${taskExecution.userId}`,
        task: `${url}/tasks/${taskExecution.taskId}`,
        interactions: `${url}/interactions/byTaskExecution/${taskExecution.id}`,
    };
}

function createUserLinks(url, user) {
    return {
        href: `${url}/users/${user.id}`,
        list: `${url}/users`,
        taskExecutions: `${url}/taskExecutions/byUser/${user.id}`
    };

}

function createTaskLinks(url, task) {
    return {
        href: `${url}/tasks/${task.id}`,
        list: `${url}/tasks`,
        taskExecutions: `${url}/taskExecutions/byTask/${task.id}`
    };

}

function createInteractionLinks(url, interaction) {
    return {
        href: `${url}/interactions/${interaction.id}`,
        list: `${url}/interactions`,
        taskExecution: `${url}/taskExecutions/${interaction.executionId}`
    }
}

function getUrl() {
    return process.env.URL;
}

function wrappObjectResponse(req, res, next, linksFunction) {
    const url = getUrl();
    const data = res.data;
    res.data = wrappItem(url, linksFunction)(data);
    next()
}

function wrappListResponse(req, res, next, linksFunction) {
    const url = getUrl();
    const data = res.data;
    res.data = wrappList(data, wrappItem(url, linksFunction));
    next()
}

function wrappList(list, wrappItemFunction) {
    return {
        data: list.map(wrappItemFunction),
        links: {prev: '', next: ''}
    };
}

function wrappItem(url, createLinksFunction) {
    return item => {
        return {
            data: item,
            links: createLinksFunction(url, item)
        }
    };
}

module.exports = router;