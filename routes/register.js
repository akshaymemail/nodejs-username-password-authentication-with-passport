const express = require('express')
const User = require('../config/db')
const passport = require('passport')


const router = express.Router()

router.get('/register', (req, res) => {
    res.render('register', {heading : 'Please Register'})
})

router.post('/register', (req, res) => {
    User.register({username : req.body.username}, req.body.password, (err, user) => {
        if(!err){
            // user shout be authenticated
            passport.authenticate('local')(req, res,() => {
                res.render('register', {heading : "You've successfully registered 😁"})
            })
        }else{
            res.render('register', {heading : err.message+' 😡'})
        }
    })
})

module.exports = router