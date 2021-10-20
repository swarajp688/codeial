const User = require('../models/user');
module.exports.profile = function(req,res){
    return res.render('users_profile',{
        usersName:"Swaraj",
        title:"profile"
    });
}
//render sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeial | Signup"
    })
}

//render signin page
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial | SignIn"
    })
}

// get the signup data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log("Error in finding user in signin up");return}
        if(!user){
            User.create(req.body , function(err,user){
                if(err){console.log("error in creating user while signing up"); return}

                return res.redirect('/users/sign-in');
            })
        }else {
            return res.redirect('back');
        }
    })
    
}
//signin and create a session for user
module.exports.createSession = function(req,res){
    //TODO later
}