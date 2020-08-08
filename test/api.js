const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const URL = process.env.URL

module.exports = {
    async get(path) {
        return chai.request(URL).get(path)
    }
}