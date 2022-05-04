const express = require('express');

const route = express.Router();   

const member = require('./member');
const post = require('./post');

const memberModel = require('../models/member');

const createError = (msg) => {throw new Error(msg)}

route.get('/',(req,res)=>{

    try{

        res.status(200).json({msg : 'Welcome to route  = api'})

    }catch (err) {res.status(500).json( {msg: err.message})}
});


route.post('/login',  async (req,res)=>{
    try{
        const data = req.body;
        console.log(data);

        if (data.username === "" || data.password === ''){
            createError('Some  Values is  empty!');
        }
        const logindata = await memberModel.findOne({email: data.username, password: data.password});
        if (logindata) {
            res.status(200).json({msg: "login Success ", data: logindata})
        } else {
            res.status(400).json({mes: 'error'});
        }
    }catch(err) { res.status(500).json({msg: err.message})}
});

route.use('/member', member);
route.use('/post', post);

module.exports = route;