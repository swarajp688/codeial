const express = require('express');
const cookieParser =  require('cookie-parser');
const app = express();
const port=8000;
const expressLayouts = require('express-ejs-layouts');
//mongodb
const db =require('./config/mongoose');

//middlewares
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts);
//extract styles and script from sub pages into layout
app.set('layout extractStyles',true);
app.set('layout exrtatScripts',true);
// use router
app.use('/',require('./routes/index'));

//setup view engine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if(err) {
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port  ${port}`);
});