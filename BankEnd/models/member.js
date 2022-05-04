const mongoose = require ('mongoose');

const memberSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    IDuser : String,
    password : String,
    E_mail : String,
    image : String
},{
    timestamps : true,
    versionKey : false
});

module.exports = mongoose.model('tb_members',memberSchema)
    

