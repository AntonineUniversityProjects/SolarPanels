const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
passport.use(
    new GoogleStrategy({
        //option for the strategy
        callbackURL:"/auth/google/redirect",
        clientID:"1024970547894-efl5r8lhsk5ql5uohp51f5qr5m55hbl8.apps.googleusercontent.com",
        clientSecret:"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"

    }, () => {
        // passport callback function
    })
)