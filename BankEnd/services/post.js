const PostModel = require('../models/Post');

exports.findPost = async () => {
    return await PostModel.find();
}

exports.creatPost = async (head,content) => {
    const Post = new PostModel({
        head : head,
        content: content
    });
    return await Post.save();
}

exports.editPost = async (head,content, id) => {
    return PostModel.updateOne({_id: id},{
        $set: {
            head : head,
            content: content
        }
    });
}

exports.deletePost = async (id) => {
    return await PostModel.deleteOne({'_id' : id});
}