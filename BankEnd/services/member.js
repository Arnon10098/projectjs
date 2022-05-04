const memberModel = require('../models/member.js');

exports.findMember = async () => {
    return await memberModel.find();
}

exports.creatMember = async (firstname, lastname,IDuser,password,E_mail) => {
    const member = new memberModel({
        firstname: firstname,
        lastname : lastname,
        IDuser : IDuser,
        password : password,
        E_mail : E_mail,
        // image : image
    });

    return await member.save();
}

exports.editMember = async (firstname, lastname,IDuser,password,E_mail,id) => {
    return memberModel.updateOne({_id: id},{
        $set: {
            firstname: firstname,
            lastname : lastname,
            IDuser : IDuser,
            password : password,
            E_mail : E_mail,
            // image : image
        }
    });

    return await member.save();
}

exports.deleteMember = async (id) => {
    return await memberModel.deleteOne({'_id' : id});
}