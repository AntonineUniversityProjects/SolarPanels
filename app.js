const express = require('express');
const authRoutes = require('./routes/auths-routes');
const homeRoutes = require('./routes/home-routes');
const app = express();
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const { session } = require('passport');
const ejs = require('ejs');

// Set the EJS options, including the async flag
const options = {
  async: true
};

// Compile the EJS template with the options
ejs.compile(/views/login.ejs, options);
// const multer = require('multer');
// const upload = multer({ dest: '/images' });
// const fs = require('fs');





// app.post('/images', upload.single('logo'), function (req, res) {
//   // req.file contains information about the uploaded photo
//   res.send('Photo uploaded successfully');
// });

// fs.readFile('/images/logo.jpg', function (err, data) {


//   // Encode the photo as a Base64 string
//   const base64Data = Buffer.from(data).toString('base64');

//   // Pass the base64Data variable to the EJS template
//   res.render('login', { photoData: base64Data });
// });


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
app.use('/home',homeRoutes);

app.get('/',(req,res)=>{
res.render('login');
})

app.listen(3000,() => {
    console.log('app now listening for requests on port 3000');

});