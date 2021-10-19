const express = require('express');
const app = express();
const port=8000;

// use router
app.use('/',require('./routes/index'));

//setup view engine
app.set('view engine','views');
app.set('views','./views');
app.listen(port,function(err){
    if(err) {
        console.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port  ${port}`);
});