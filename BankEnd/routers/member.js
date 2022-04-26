const express = require('express');
const { get } = require('express/lib/response');

const route = express.Router();
const { getMember,creatMember,deleteMember} = require('../controllers/member');


route.get('/',getMember);
route.post('/',creatMember);
route.delete('/:id',deleteMember);


module.exports = route;

