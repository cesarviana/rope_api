const api = require('./api');
const {expect} = require('chai');
const moment = require('moment');
const uuid = require('uuid/v4');

const randomName = require('node-random-name');

function createUsers(nUsers) {
    const users = [];
    for (let i = 0; i < nUsers; i++) {
        const gender = i % 2 === 0 ? 'female' : 'male';
        users.push({
            id: uuid(),
            name: randomName({seed: i, gender}),
            gender: gender.charAt(0).toUpperCase(),
            birthDate: moment()
        })
    }
    return users;
}

function createExecutions(nExecutions, tasks, users) {
    const executions = [];
    const interaction = ['projector','buttons_only'];
    for(let j=0; j<users.length; j++) {
        const user = users[j];
        for (let i = 0; i < nExecutions; i++) {
            const taskIndex = Math.floor(Math.random() * tasks.length);
            executions.push({
                id: uuid(),
                taskId: tasks[taskIndex].id,
                userId: user.id,
                interaction: interaction[i % 2]
            })
        }
    }
    return executions;
}

function createTasks() {
    return [{
        id: uuid(),
        mat: [
            [0, 0, 0, 0, 1], // 1 obstacles
            [0, 0, 0, 2, 0], // 2 objective
            [1, 1, 1, 0, 0], // 3 start
            [0, 0, 0, 0, 0],
            [0, 3, 1, 0, 0],
        ]
    }, {
        id: uuid(),
        mat: [
            [1, 0, 0, 0, 1], // 1 obstacles
            [0, 0, 0, 2, 0], // 2 objective
            [0, 1, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 3, 1, 0, 0],
        ]
    }, {
        id: uuid(),
        mat: [
            [1, 0, 0, 0, 1], // 1 obstacles
            [0, 0, 0, 0, 0], // 2 objective
            [2, 0, 1, 0, 0],
            [1, 0, 1, 0, 0],
            [1, 3, 1, 0, 0],
        ]
    }];
}

function createInteractions(nInteractions, executions) {
    const interactions = [];
    const interactionType = ['forward', 'backward', 'left', 'right', 'execute'];

    for (let i = 0; i < nInteractions; i++) {
        const executionIndex = Math.floor(Math.random() * executions.length);
        const typeIndex = Math.floor(Math.random() * interactionType.length);
        interactions.push({
            executionId: executions[executionIndex].id,
            type: interactionType[typeIndex],
            instant: Date.now()
        })
    }
    return interactions;
}

describe('sync', () => {
    it('/sync', async () => {

        const nUsers = 10;
        const nExecutions = 3;
        const nInteractions = 70;

        const users = createUsers(nUsers);

        const tasks = createTasks();

        const executions = createExecutions(nExecutions, tasks, users);

        const interactions = createInteractions(nInteractions, executions);

        const localData = {
            users,
            tasks,
            executions,
            interactions
        };

        const response = await api.post('/sync', localData);
        expect(response).have.status(200)
    })
});