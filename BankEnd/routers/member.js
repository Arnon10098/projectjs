const express = require('express');

const route = express.Router();
const { getMember,creatMember,deleteMember, editMember} = require('../controllers/member');


route.get('/',getMember);
route.post('/',creatMember);
route.patch('/:id',editMember);
route.delete('/:id',deleteMember);


module.exports = route;

