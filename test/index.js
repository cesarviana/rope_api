const api = require('./api');
const { expect } = require('chai');

describe('API running', () => {
    it('/', async () => {
        const response = await api.get('/')
        expect(response).have.status(200)
    });

    it('/user', async () => {
        const user = {
            name: 'Cesar',
            age: 25,
            gender: 'M'
        }
        const response = await api.post('/user', user)
        expect(response).have.status(200)
    })
});