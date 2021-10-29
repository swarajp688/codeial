const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');


//authentication using passport js
passport.use(new LocalStrategy({
        usernameField:'email'
    },
    function(email,password,done){
        //fing user and estabblish identity
        User.findOne({email : email},function(err,user){
            if(err){
                console.log("error in finding user -->passport");
                return done(err);
            }
            if(!user || user.password != password){
                console.log('INVALID USERNAME/PASSWORD');
                return done(null,false);
            }
            return done(null,user);
        });
    }

));

//serielizing the user to decide which key is to be kept in cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserializing the user from the key in cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log("Error in finding user");
        }
        return done(null,user);
    });
});

//check if user is authenticated
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    //if user is not signed in 
    return res.redirect('/users/sign-in')
}

//
passport.setAthenticatedUser = function (req,res,next) {
    if(req.isAuthenticated){
        //req.user contains the current signed in user from the session cookie and we are just sending this to locals for views
        res.locals.user= req.user;
    }    
    next();
}
module.exports = passport;