'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _plaid = require('plaid');

var _plaid2 = _interopRequireDefault(_plaid);

var _envvar = require('envvar');

var _envvar2 = _interopRequireDefault(_envvar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.router();

var APP_PORT = _envvar2.default.number('APP_PORT', 8000);
var PLAID_CLIENT_ID = _envvar2.default.string('PLAID_CLIENT_ID', '5bad7063f616450012804f45');
var PLAID_SECRET = _envvar2.default.string('PLAID_SECRET', '14047a01e94ef5b64902601a0cadc8');
var PLAID_PUBLIC_KEY = _envvar2.default.string('PLAID_PUBLIC_KEY', 'af3778e304e1a63b1eabb2c55bb229');
var PLAID_ENV = _envvar2.default.string('PLAID_ENV', 'sandbox');

var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

var client = new _plaid2.default.Client(PLAID_CLIENT_ID, PLAID_SECRET, PLAID_PUBLIC_KEY, _plaid2.default.environments[PLAID_ENV], {
  version: '2018-05-22'
});

app.use(_express2.default.static('public'));
app.set('view engine', 'ejs');
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({
  extended: false
}));

// app.get('/', function (request, response, next) {
//   response.render('index.ejs', {
//     PLAID_PUBLIC_KEY: PLAID_PUBLIC_KEY,
//     PLAID_ENV: PLAID_ENV,
//   });
// });

app.post('/get_access_token', function (request, response, next) {
  PUBLIC_TOKEN = request.body.public_token;
  client.exchangePublicToken(PUBLIC_TOKEN, function (error, tokenResponse) {
    if (error != null) {
      prettyPrintResponse(error);
      return response.json({
        error: error
      });
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    prettyPrintResponse(tokenResponse);
    response.json({
      access_token: ACCESS_TOKEN,
      item_id: ITEM_ID,
      error: null
    });
  });
});

app.get('/accounts', function (request, response, next) {
  client.getAccounts(ACCESS_TOKEN, function (error, accountsResponse) {
    if (error != null) {
      prettyPrintResponse(error);
      return response.json({
        error: error
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
  var startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
  var endDate = moment().format('YYYY-MM-DD');
  client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
    count: 250,
    offset: 0
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

var server = app.listen(APP_PORT, function () {
  console.log('plaid-quickstart server listening on port ' + APP_PORT);
});

var prettyPrintResponse = function prettyPrintResponse(response) {
  console.log(util.inspect(response, {
    colors: true,
    depth: 4
  }));
};