const express = require('express');
const authRoutes = require('./routes/auths-routes');
const homeRoutes = require('./routes/home-routes');
const nodemailer = require('nodemailer');

const app = express();
const keys = require('./configurations/keys');
const passportSetup = require('./configurations/passport-setup');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const { session } = require('passport');
// const path = require('path');
//const ejs = require('ejs');

// Set the EJS options, including the async flag

// const options = {
//   async: true
// };

// Compile the EJS template with the options

// ejs.compile(/views/login.ejs, options);
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


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'antonineuniversityprojects@gmail.com',
    pass: keys.mail.mailauth
  }
});

var mailOptions = {
  from: 'antonineuniversityprojects@gmail.com',
  to: 'roy.gebrayel11@gmail.com , abbashamyeh2004@gmail.com , roy.gebrayel22@gmail.com',
  subject: 'Welcome to SolarPanels.co',
  text: 'We are glad you are here ! hope you enjoy our beautifull website',
  html: '<h1> power up your life with our limited solarpanels !!! </h1>'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

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


// app.use(express.static(__dirname +'/assets'))    '/images/maintenanace.jpeg' , '/images/solar.jpg'
app.use(express.static('./assets'));
//set up view engine
app.set('view engine','ejs');

// set up routes
app.use('/auth',authRoutes);
app.use('/home',homeRoutes);


app.get('/', (req, res) => {
  const images = ['/images/logo.jpg'];
  // res.render('login', { images });
  res.render('login',{images});

});
app.get('/table', (req, res) => {
  
 
  res.render('table');

});


app.get('/gallery', (req, res) => {
  
  res.render('gallery');
});

app.get('/register', (req, res) => {

  res.render('register');
});

app.get('/contact', (req,res)=> {
  res.render('contactus');
})


app.listen(3000,() => {
    console.log('app now listening for requests on port 3000');

});