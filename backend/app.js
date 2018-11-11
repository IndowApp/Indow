const bodyParser = require('body-parser');
const express = require('express');
 //Models Requirement/import 

const PORT = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const controllers = require('./controllers');
app.use(controllers);   

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
});

module.exports = app;