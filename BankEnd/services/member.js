const memberModel = require('../models/member');

exports.findMember = async () => {
    return await memberModel.find();
}

exports.creatMember = async (firstname, lastname, username,IDuser,password,E_mail,image) => {
    const member = new memberModel({
        firstname: firstname,
        lastname : lastname,
        username: username,
        IDuser : IDuser,
        password : password,
        E_mail : E_mail,
        image : image
    });
    return await member.save();
}

exports.deleteMember = async (id) => {
    return await memberModel.deleteOne({'_id' : id});
}