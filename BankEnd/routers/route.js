const express = require('express');

const route = express.Router();   

const member = require('./member');


route.use('/member', member);

module.exports = route;