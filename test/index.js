const api = require('./api');
const {expect} = require('chai');
const moment = require('moment');
const { v4: uuid } = require('uuid');

const userId      = uuid();
const taskId      = uuid();
const executionId = uuid();

describe('test post data', () => {
    it('/', async () => {
        const response = await api.get('/');
        expect(response).have.status(200);
        expect(response.body).to.have.property("links");
    });

    it('/user', async () => {
        const user = {
            id: userId,
            name: 'Cesar',
            birthDate: moment('1994-12-29'),
            gender: 'M'
        };
        const response = await api.post('/users', user);
        expect(response).have.status(200)
    });

    it('/task', async () => {
        const task = {
            id: taskId,
            mat: [
                [0, 0, 0, 0, 1], // 1 obstacles
                [0, 0, 0, 2, 0], // 2 objective
                [1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
            ]
        };
        const response = await api.post('/tasks', task);
        expect(response).have.status(200)
    });

    it('/taskExecution', async () => {
        const taskExecution = {
            id: executionId,
            startTime: Date.now(),
            endTime: Date.now(),
            taskId,
            userId
        };
        const response = await api.post('/taskExecutions', taskExecution);
        expect(response).have.status(200)
    });

    it('/interaction', async () => {
        const interaction = {
            type: 'FORWARD',
            instant: Date.now(),
            executionId
        };
        const response = await api.post('/interactions', interaction);
        expect(response).have.status(200)
    });

});