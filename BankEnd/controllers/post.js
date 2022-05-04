/*import res from "express/lib/response"; */
const PostService = require('../services/Post');

exports.getPost = async function sayhello(req ,res){
    const data = await PostService.findPost();
    res.status(200).json(data);
}

exports.creatPost = async (req, res) => {
    try{
        const body = req.body;
        await PostService.creatPost(body.head, body.content, body.image);
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

exports.editPost = async (req, res) => {
    try{
        const id = req.params.id;
        const body = req.body;
        await PostService.editPost(body.head,body.content, id, body.image);
        res.status(200).json({
            status: true,
            memsage: "Edit"
        });
    }catch{
        res.status(500).json({
            status: false,
            memsage: "Error"
        });
    }
}


exports.deletePost = async (req, res) => {
    const id = req.params.id;
    try{
        await PostService.deletePost(id);
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