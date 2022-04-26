/*import res from "express/lib/response"; */
const memberService = require('../services/member');

exports.getMember = async function sayhello(req ,res){
    const data = await memberService.findMember();
    res.status(200).json(data);
}

exports.creatMember = async (req, res) => {
    try{
        const body = req.body;
        await memberService.creatMember(body.firstname,body.lastname,body.username,body.IDuser,body.password,body.E_mail,body.image);
        res.status(201).json({
            status: true,
            memsage: "Created"
        });
    }catch{
        res.status(500).json({
            status: false,
            memsage: "Error"
        });
    }
}

exports.deleteMember = async (req, res) => {
    const id = req.params.id;
    try{
        await memberService.deleteMember(id);
        res.json({
        status: true,
        memsage: "Remove Success"
    })
    }catch{
        res.status(500).json({
        status: false,
        memsage: "Error"
    });
}
}