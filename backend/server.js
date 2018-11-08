const express = require('express');
const bodyParser = require('body-parser');
const logger =require( 'morgan');
const mongoose = require('mongoose');
const plaid =require('plaid');
const envvar = require('envvar');

const app = express();
const router = express.Router();
const APP_PORT = envvar.number('APP_PORT', 8000);
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

app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function (request, response, next) {
  response.render('index.ejs', {
    PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
    PLAID_ENV: PLAID_ENV,
  });
});

app.post('/get_access_token', function (request, response, next) {
  PUBLIC_TOKEN = request.body.public_token;
  client.exchangePublicToken(PUBLIC_TOKEN, function (error, tokenResponse) {
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

app.get('/accounts', function (request, response, next) {
  client.getAccounts(ACCESS_TOKEN, function (error, accountsResponse) {
    if (error != null) {
      prettyPrintResponse(error);
      return response.json({
        error: error,
      });
    }
    prettyPrintResponse(accountsResponse);
    response.json({
      error: null,
      accounts: accountsResponse
    });
  });
});

app.get('/transactions', function (request, response, next) {
  // Pull transactions for the Item for the last 30 days
  let startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
  let endDate = moment().format('YYYY-MM-DD');
  client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
    count: 250,
    offset: 0,
  }, function (error, transactionsResponse) {
    if (error != null) {
      prettyPrintResponse(error);
      return response.json({
        error: error
      });
    } else {
      prettyPrintResponse(transactionsResponse);
      response.json({
        error: null,
        transactions: transactionsResponse
      });
    }
  });
});

const server = app.listen(APP_PORT, function () {
  console.log('plaid-quickstart server listening on port ' + APP_PORT);
});

const prettyPrintResponse = response => {
  console.log(util.inspect(response, {
    colors: true,
    depth: 4
  }));
};

app.post('/set_access_token', function(request, response, next) {
  ACCESS_TOKEN = request.body.access_token;
  client.getItem(ACCESS_TOKEN, function(error, itemResponse) {
    response.json({
      item_id: itemResponse.item.item_id,
      error: false,
    });
  });
});