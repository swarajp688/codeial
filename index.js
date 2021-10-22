const express = require('express');
const cookieParser =  require('cookie-parser');
const app = express();
const port=8000;
const expressLayouts = require('express-ejs-layouts');
//mongodb
const db =require('./config/mongoose');
//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
//middlewares
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);
//extract styles and script from sub pages into layout
app.set('layout extractStyles',true);
app.set('layout exrtatScripts',true);


//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'codeial',
    //TODO change the secret before deployment in production
    secret:'something',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

// use router
app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err) {
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port  ${port}`);
});