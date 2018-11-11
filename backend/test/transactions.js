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

    // describe('/GET AccessToken', () => {
    //     it('It should POST an AccessToken', (done) => {
    //         chai.request(server)
    //         .post('/plaid/get_access_token')
    //         .end((error,results) => {
    //                 console.log(results);
    //             done();
    //         });
    //     });
    // });

});

