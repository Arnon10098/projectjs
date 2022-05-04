const PostModel = require('../models/Post');

exports.findPost = async () => {
    return await PostModel.find();
}

exports.creatPost = async (head,content, image) => {
    const Post = new PostModel({
        head : head,
        content: content,
        image: image
    });
    return await Post.save();
}

exports.editPost = async (head,content, id, image) => {
    return PostModel.updateOne({_id: id},{
        $set: {
            head : head,
            content: content,
            image: image
        }
    });
}

exports.deletePost = async (id) => {
    return await PostModel.deleteOne({'_id' : id});
}