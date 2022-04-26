const express = require('express');
const app = express();
require('dotenv').config();
const bodyparser = require('body-parser');
const db = require('./utils/database');
const host = process.env.APP_HOST || 'localhost';
const port = process.env.APP_PORT || 3000;

const route = require('./routers/route');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use(route)

app.listen(port,host,() => {
console.log("Start Server on port "+port);
});


app.use(express.static(__dirname + '/www'));



