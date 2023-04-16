const express = require('express');
const authRoutes = require('./routes/auths-routes');
const app = express();
const passportSetup = require('./config/passport-setup');

//set up view engine
app.set('view engine','ejs');

// set up routes
app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
res.render('login');
})

app.listen(3001,() => {
    console.log('app now listening for requests on port 3001');

});