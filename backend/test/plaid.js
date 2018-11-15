process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Plaid', () =>{

    describe('/GET index', () => {
        it('It should GET / route', (done) =>{
            chai.request(server)
            .get('/plaid')
            .end((error,result) => {
                    console.log(result);
                done(); 
            });
        });
    });

    describe('/GET AccessToken', () => {
        it('It should POST an AccessToken', (done) => {
            chai.request(server)
            .post('/plaid/get_access_token')
            .end((error,results) => {
                    console.log(results);
                done();
            });
        });
    });

    describe('/GET Accounts', () => {
        it('It should Get user Accounts', (done) => {

            chai.request(server)
            .get('/plaid/accounts')
            .end((error,results) => {
                    console.log(results);
                done();
            });

        });
    });


    describe('/GET Transactions', () => {
        it('It should GET user trnasactions', (done) => {

            chai.request(server)
            .get('/plaid/transactions')
            .end((error,results) => {
                    console.log(results);
                done();
            });

        });
    });


    describe('/GET Balance', () => {
        it('It should GET user Balances', (done) => {

            chai.request(server)
            .get('/plaid/balance')
            .end((error,results) => {
                    console.log(results);
                done();
            });

        });
    });

});

