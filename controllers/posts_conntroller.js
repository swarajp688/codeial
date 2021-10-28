const Post = require('../models/post')
const Comment = require('../models/comment');
const { post } = require('../routes/posts');
module.exports.create =  function(req,res) {
    Post.create({
        content:req.body.content,
        user:req.user._id
    },function(err,post){
        if(err){
            console.log(`error in creating post`);

            return ;
        }
        return res.redirect('back');
    })
}


// module.exports.newComment = function(req,res) {
//     Comment.create({
//         content:req.body.content,
//         user:user._id,
//         post:post.id
//     })
// }