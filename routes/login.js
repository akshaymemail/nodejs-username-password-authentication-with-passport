const express = require('express')
const User = require('../config/db')
const passport = require('passport')


const router = express.Router()

router.get('/login', (req, res) => {
    res.render('login', {heading : 'Login'})
})

router.post('/login', (req, res) => {
    const user = new User({
        username : req.body.username,
         password : req.body.password
        }
    )
    req.login(user, err => {
            if(!err) {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('secret')
                })
            }else{
                res.render('login', {heading : err.message + ' 🙄'})
            }
        })
})

module.exports = router