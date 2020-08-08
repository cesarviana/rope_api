let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('Express', () => {
    it('/', (done) => {
        chai.request(process.env.URL)
            .get('/')
            .end((_, res) => {
                res.should.have.status(200);
                done();
            });
    });
});