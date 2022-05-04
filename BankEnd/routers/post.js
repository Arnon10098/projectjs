const express = require('express');

const route = express.Router();
const { getPost,creatPost,deletePost, editPost} = require('../controllers/Post');


route.get('/',getPost);
route.post('/',creatPost);
route.patch('/:id',editPost);
route.delete('/:id',deletePost);


module.exports = route;
