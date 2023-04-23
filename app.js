const express = require('express');
const authRoutes = require('./routes/auths-routes');
const bodyParser = require('body-parser');
const app = express();
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');



//set up view engine
app.set('view engine','ejs');

// set up routes
app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
res.render('login');
})

app.listen(3000,() => {
    console.log('app now listening for requests on port 3000');

});