const mongoose = require ('mongoose');

const postSchema = mongoose.Schema({
    head : String,
    content : String,
    image : String
});

module.exports = mongoose.model('tb_posts',postSchema);

