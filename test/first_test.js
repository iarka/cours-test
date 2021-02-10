const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "https://www.cheapshark.com/api/1.0/deals"
const StoreUrl = "https://www.cheapshark.com/api/1.0/stores"

chai.use(chaiHttp);
describe("Premier test", function(){
    it('Serveur en ligne', function(done) {
        chai.request(baseUrl)
            .get('')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    })
})

describe("Second test", function(){
    it('Store endpoint', function(done) {
        chai.request(StoreUrl)
            .get('')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    })
})