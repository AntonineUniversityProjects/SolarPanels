const express = require('express');
const authRoutes = require('./routes/auths-routes');
const app = express();
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');


//mongoose.connect(keys.mongodb.dbauth,()=>{console.log("connected to mongo db")});
mongoose.connect(keys.mongodb.dbauth ,{dbName: 'solarpanels-login',
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB');
  });

// Handle form submission
// app.get('/submit-form', function (req, res) {
//     // Get form data from request body
//     const name = req.body.name;
//     const email = req.body.email;
// });

app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys: [keys.session.cookieKey]
}));

//intialize passport
app.use(passport.initialize());
app.use(passport.session());

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