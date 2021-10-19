module.exports.profile = function(req,res){
    return res.render('users',{
        usersName:"Swaraj",
        title:"profile"
    });
}
