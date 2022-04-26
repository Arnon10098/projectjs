const PostModel = require('../models/Post');

exports.findPost = async () => {
    return await PostModel.find();
}

exports.creatPost = async (Image,head,content) => {
    const Post = new PostModel({
        Image : Image,
        head : head,
        content: content
    });
    return await Post.save();
}

exports.deletePost = async (id) => {
    return await PostModel.deleteOne({'_id' : id});
}