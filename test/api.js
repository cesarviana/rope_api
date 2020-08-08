const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

class API {
    constructor(url) {
        this.url = url;
    }
    async get(path) {
        return chai.request(this.url).get(path)
    }
    async post(path, params) {
        return chai.request(this.url).post(path, params)
    }
}

module.exports = new API(process.env.URL)