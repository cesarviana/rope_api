const api = require('./api');
const {expect} = require('chai');
const moment = require('moment');
const uuid = require('uuid/v4');

const userId      = uuid();
const taskId      = uuid();
const executionId = uuid();;

describe('test', () => {
    it('/', async () => {
        const response = await api.get('/');
        expect(response).have.status(200)
    });

    it('/user', async () => {
        const user = {
            id: userId,
            name: 'Cesar',
            birthDate: moment('1994-12-29'),
            gender: 'M'
        };
        const response = await api.post('/user', user);
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
        const response = await api.post('/task', task);
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
        const response = await api.post('/taskExecution', taskExecution);
        expect(response).have.status(200)
    });

    it('/interaction', async () => {
        const interaction = {
            type: 'FORWARD',
            instant: Date.now(),
            executionId
        };
        const response = await api.post('/interaction', interaction);
        expect(response).have.status(200)
    });

});