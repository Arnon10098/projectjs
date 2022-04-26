const mongoose = require ('mongoose');

const postSchema = mongoose.Schema({
    Image : String,
    head : String,
    content : String
});

module.exports = mongoose.model('tb_posts',postSchema);

