const express = require('express');
const authRoutes = require('./routes/auths-routes');
const bodyParser = require('body-parser');
const app = express();
const passportSetup = require('./config/passport-setup');

app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.get('/submit-form', function (req, res) {
    // Get form data from request body
    const name = req.body.name;
    const email = req.body.email;
});

//set up view engine
app.set('view engine','ejs');

// set up routes
app.use('/auth',authRoutes);

app.get('/',(req,res)=>{
res.render('login');
});

app.listen(3000,() => {
    console.log('app now listening for requests on port 3000');

});