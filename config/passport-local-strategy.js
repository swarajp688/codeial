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

module.exports = passport;