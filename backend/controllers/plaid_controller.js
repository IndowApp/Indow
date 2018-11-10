const express = require('express');
const plaid = require('plaid');
const envvar = require('envvar');

// const APP_PORT = envvar.number('APP_PORT', 8000);
const PLAID_CLIENT_ID = envvar.string('PLAID_CLIENT_ID', '5bad7063f616450012804f45');
const PLAID_SECRET = envvar.string('PLAID_SECRET', '14047a01e94ef5b64902601a0cadc8');
const PLAID_PUBLIC_KEY = envvar.string('PLAID_PUBLIC_KEY', 'af3778e304e1a63b1eabb2c55bb229');
const PLAID_ENV = envvar.string('PLAID_ENV', 'sandbox');

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;

const client = new plaid.Client(
    PLAID_CLIENT_ID,
    PLAID_SECRET,
    PLAID_PUBLIC_KEY,
    plaid.environments[PLAID_ENV], {
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
        router.post('/get_access_token', this.getAccessToken);
        router.get('/transactions', this.transactions);
        router.get('/balance', this.balance);
        router.get('/accounts', this.accounts);

        return router;
    },
    index(request, response, next) {
        response.json({
            msg: "Successful GET to '/' route",
            PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
            PLAID_ENV: PLAID_ENV,
        });

    },
    getAccessToken(request, response, next) {
        PUBLIC_TOKEN = request.body.public_token;
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