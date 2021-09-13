module.exports.home = function (req,res){
    return res.end('<h1>Express is up for codeial</h1>');
}


module.exports.userProfile = function(req,res){
    return res.end('<h1>This is user profile page</h1>');
}