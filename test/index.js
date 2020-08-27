const api = require('./api');
const { expect } = require('chai');

describe('Test all', () => {
    it('/', async () => {
        const response = await api.get('/');
        expect(response).have.status(200)
    });

    it('/user', async () => {
        const user = {
            name: 'Cesar',
            age: 25,
            gender: 'M'
        };
        const response = await api.post('/user', user);
        expect(response).have.status(200)
    });

    it('/task', async() => {
       const task = {
           mat: [
               [0,0,0,0,1], // 1 obstacles
               [0,0,0,2,0], // 2 objective
               [1,1,1,0,0],
               [0,0,0,0,0],
               [0,0,1,0,0],
           ]
       };
       const response = await api.post('/task', task);
        expect(response).have.status(200)
    });

    it('/taskExecution', async() => {
        const taskExecution = {
            startTime: Date.now(),
            endTime: Date.now(),
            taskId: 1,
            userId: 1
        };
        const response = await api.post('/taskExecution', taskExecution);
        expect(response).have.status(200)
    });

    it('/interaction', async() => {
        const interaction = {
            type: 'FORWARD',
            instant: Date.now(),
            executionId: 1
        };
        const response = await api.post('/interaction', interaction);
        expect(response).have.status(200)
    })
});