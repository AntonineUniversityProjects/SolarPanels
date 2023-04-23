const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require ('../models/user-model');
const { findOne } = require('../models/user-model');

     

passport.use(
    new GoogleStrategy({
        //option for the strategy
     
        callbackURL:"/auth/google/redirect",
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
        
    }, (acessToken,refreshToken,profile,done) => {


        User.findOne({googleId:profile.id}).then((currentUser)=>{

            if(currentUser){

                console.log('user is',currentUser)
            }
            else {
                  new User({
            username : profile.displayName,
            googleId : profile.id
        }).save().then((newUser)=>{
            console.log("new user create" + newUser);

        });
            }
           
        })
        
       
       
    })
)
