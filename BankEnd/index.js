const express = require('express');
const app = express();
require('dotenv').config();
const bodyparser = require('body-parser');
const db = require('./utils/database');
const host = process.env.APP_HOST || 'localhost';
const port = process.env.APP_PORT || 3000;

const expressSession = require('express-session');

const cors = require('cors');


const mongoose = require('mongoose');



app.use(cors());

app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/api',require('./routers'));

app.listen(port,() => {
console.log("Start Server on port "+port);
});


app.use(express.static(__dirname + '/www'));



