/*import res from "express/lib/response"; */
const memberService = require('../services/member');

exports.getMember = async function sayhello(req ,res){
    const data = await memberService.findMember();
    res.status(200).json(data);
}

exports.creatMember = async (req, res) => {
    const body = req.body;
    try{
        console.log(req);
        await memberService.creatMember(body.firstname,body.lastname,body.IDuser,body.password,body.E_mail);
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

exports.editMember = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try{
        console.log(req);
        await memberService.editMember(body.firstname,body.lastname,body.IDuser,body.password,body.E_mail, id);
        res.status(200).json({
            status: true,
            memsage: "edit"
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