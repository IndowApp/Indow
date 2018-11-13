require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const logger =require( 'morgan');
const models = require('./models');
const APP_PORT = process.env.PORT || 8000;
const controllers = require('./controllers');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(controllers);   

const server  = models.sequelize.sync({force: false})
  .then(() => {
    app.listen(APP_PORT, () => {
      console.log(`Server is up and running on port: ${APP_PORT}`)
    });
});

// app.use(server);

module.exports = app;