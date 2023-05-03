const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');

   
   
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info






router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
   
 
res.redirect('/home/');

        
    
});







// router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
//     if (req.session.views) {
//         req.session.views++;
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<p>Number of views: ' + req.session.views + '</p>');
//         res.write('<p>Expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>');
//         res.end();
//     } else {
//         req.session.views = 1;
//         res.end('Welcome to the session demo. Refresh page!');
//     }
// });

module.exports = router;