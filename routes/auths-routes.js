const passport = require('passport');

const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out')
})

// auth with google

router.get('/google', passport.authenticate('google', { scope: ['profile'] }),
);

module.exports = router;