const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
    //option for the strategy

}),()=>{
    // passport callback function
})