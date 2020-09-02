const api = require('./api');
const {expect} = require('chai');

async function getOne(subject) {
    const response = await api.get(`/${subject}`);
    const list = response.body.data;
    expect(list.length).to.be.greaterThan(0);
    return list[0];
}

describe('test get data', () => {

    let aTaskId = '';

    it('/task', async () => {
        const response = await api.get('/task');
        expect(response).have.status(200);

        const data = response.body.data;

        expect(data).to.be.an("array");
        expect(data.length).to.be.greaterThan(4);

        aTaskId = data[0].id;
    });

    it('/task executions', async () => {
        const response = await api.get(`/taskExecution/byTask/${aTaskId}`);
        expect(response).have.status(200);

        const data = response.body.data;

        expect(data).to.be.an("array");
    });

    it('/execution interactions', async () => {
        const interaction = await getOne('interaction');
        const response = await api.get(`/interaction/byExecution/${(interaction.executionId)}`);
        const interactions = response.body.data;
        expect(interactions.length).to.be.greaterThan(0);
    });

    it('/execution by user', async () => {
        const user = await getOne('user');
        const response = await api.get(`/taskExecution/byUser/${user.id}`);
        const executions = response.body.data;
        expect(executions.length).to.be.greaterThan(0);
    });

});