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
    })
});