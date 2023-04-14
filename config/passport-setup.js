import { getHash } from '../hash';
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        //option for the strategy
     
        callbackURL:"/auth/google/redirect",
        clientID: getHash(),
        
        clientSecret:"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"
        
    }, () => {
        // passport callback function
       
    })
)
console.log(clientID);