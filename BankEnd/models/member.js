const mongoose = require ('mongoose');

const memberSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    IDuser : String,
    password : String,
    E_mail : String,
    image : String
});

module.exports = mongoose.model('tb_members',memberSchema);

