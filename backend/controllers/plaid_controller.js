const util = require('util');
const express = require('express');
const plaid = require('plaid');
const envvar = require('envvar');

// const APP_PORT = envvar.number('APP_PORT', 8000);
const PLAID_CLIENT_ID = envvar.string('PLAID_CLIENT_ID', '5bad7063f616450012804f45');
const PLAID_SECRET =process.env.PLAID_SECRET_KEY;
const PLAID_PUBLIC_KEY =  process.env.PLAID_SECRET_KEY;
const PLAID_ENV = envvar.string('PLAID_ENV', 'sandbox');

const INSTITUTION_ID = 'ins_9';
const INITIAL_PRODUCTS = ['transactions','auth','income','identity'];

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;

const client = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_PUBLIC_KEY,
    plaid.environments.sandbox, {
        version: '2018-05-22'
    }
);


let prettyPrintResponse = response => {
    console.log(util.inspect(response, {
        colors: true,
        depth: 4
    }));
};

const PlaidController = {
    registerRouter() {
        const router = express.Router();

        router.get('/', this.index);
        router.get('/item', this.item);
        router.post('/set_access_token', this.setAccessToken);
        router.post('/get_access_token', this.getAccessToken);
        router.get('/transactions', this.transactions);
        router.get('/balance', this.balance);
        router.get('/accounts', this.accounts);

        return router;
    },
    item(request, response, next) {
        client.getItem(ACCESS_TOKEN, (error, itemResponse) => {
            if (error != null) {
                prettyPrintResponse(error);
                return response.json({
                    error: error
                });
            }

            client.getInstitutionById(itemResponse.item.institution_id, (err, instRes) => {
                if (err != null) {
                    let msg = 'Unable to pull insitution information from the Plaid API.';
                    console.log(msg + '\n' + JSON.stringify(error));
                    return response.json({
                        error: msg
                    });
                } else {
                    prettyPrintResponse(itemResponse);
                    response.json({
                        item: itemResponse.item,
                        institution: instRes.institution,
                    });
                }
            });
        });
    },
    index(request, response, next) {
        response.json({
            msg: "Successful GET to '/' route",
            PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
            PLAID_ENV: PLAID_ENV,
        });
    },
    setAccessToken(request, response, next) {
        ACCESS_TOKEN = request.body.access_token;
        client.getItem(ACCESS_TOKEN, (error, itemResponse) => {
            response.json({
                item_id: itemResponse.item.item_id,
                error: false,
            });
        });
    },
    getAccessToken(request, response, next) {
        // PUBLIC_TOKEN = request.body.public_token;
        client.sandboxPublicTokenCreate(INSTITUTION_ID, INITIAL_PRODUCTS, (error, createResponse) => {
            // Handle error, if present
            if (error != null) {
                prettyPrintResponse(error);
                return response.json({
                    error: error,
                });
            }
            PUBLIC_TOKEN = createResponse.public_token;
            // The generated public_token can now be exchanged for an 
            client.exchangePublicToken(PUBLIC_TOKEN, (error, tokenResponse) => {
                if (error != null) {
                    prettyPrintResponse(error);
                    return response.json({
                        error: error,
                    });
                }
                ACCESS_TOKEN = tokenResponse.access_token;
                ITEM_ID = tokenResponse.item_id;
                prettyPrintResponse(tokenResponse);
                response.json({
                    access_token: ACCESS_TOKEN,
                    item_id: ITEM_ID,
                    error: null,
                });
            });
        });
    },
    transactions(request, response, next) {
        let startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
        let endDate = moment().formate('YYYY-MM-DD');
        client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
            count: 250,
            offset: 0,
        }, (error, transactionsResponse) => {
            if (error != null) {
                prettyPrintResponse(error);
                return response.json({
                    error: error,
                });
            } else {
                prettyPrintResponse(transactionsResponse);
                resposne.json({
                    error: null,
                    transactions: transactionsResponse,
                });
            }
        });
    },
    balance(request, response, next) {
        client.getBalance(ACCESS_TOKEN, (error, balanceResponse) => {
            if (error != null) {
                prettyPrintResponse(error);
                return response.json({
                    error: error,
                });
            }
            prettyPrintResponse(balanceResponse);
            reponse.json({
                error: null,
                balance: balanceResponse,
            });
        });
    },
    accounts(request, response, next) {
        client.getAccounts(ACCESS_TOKEN, (error, accountsReponse) => {
            if (error != null) {
                prettyPrintResponse(error);
                return response.json({
                    errror: error,
                });
            }
            prettyPrintResponse(accountsReponse);
            response.json({
                error: error,
            });
        });
    },
};

module.exports = PlaidController.registerRouter();