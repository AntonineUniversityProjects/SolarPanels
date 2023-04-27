const express = require('express');
const authRoutes = require('./routes/auths-routes');
const profileRoutes = require('./routes/profile-routes');
const app = express();
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const { session } = require('passport');


//mongoose.connect(keys.mongodb.dbauth,()=>{console.log("connected to mongo db")});
mongoose.connect("mongodb+srv://roygebrayel:313@solarpanels-login.oiy6gcx.mongodb.net/?retryWrites=true&w=majority" ,{dbName: 'solarpanels-login',
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
  name : session,
  maxAge:24*60*60*1000,
  keys: [keys.session.cookieKey]
}));

// app.get('/', (req, res) => {
//   if (req.session.views) {
//     req.session.views++;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<p>Number of views: ' + req.session.views + '</p>');
//     res.write('<p>Expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>');
//     res.end();
//   } else {
//     req.session.views = 1;
//     res.end('Welcome to the session demo. Refresh page!');
//   }
// });

//intialize passport
app.use(passport.initialize());
app.use(passport.session());

//set up view engine
app.set('view engine','ejs');

// set up routes
app.use('/auth',authRoutes);
app.use('/profile',profileRoutes);

app.get('/',(req,res)=>{
res.render('login');
})

app.listen(3000,() => {
    console.log('app now listening for requests on port 3000');

});