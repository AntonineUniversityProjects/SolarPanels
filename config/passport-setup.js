const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys');
passport.use(
    new GoogleStrategy({
        //option for the strategy
        clientID:"keys.google.clientID",
        clientSecret:"keys.google.clientSecret"

    }), () => {
        // passport callback function
    })