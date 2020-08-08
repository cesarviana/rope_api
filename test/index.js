const api = require('./api');
const { expect } = require('chai');

describe('API running', () => {
    it('/', async () => {
        const response = await api.get('/')
        expect(response).have.status(200)
    });
});