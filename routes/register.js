const express = require('express')
const User = require('../config/db.js')
const bcrypt = require('bcrypt')

const router = express.Router()

router.get('/register', (req, res) => {
    res.render('register', {heading : 'Please Register'})
})

router.post('/register', (req, res) => {
    // hasing the password with 10 round of salting
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        if(!err){
            new User({
                username : req.body.username,
                password : hash
            }).save(err => {
                if(!err){
                    // seccessfully registered
                    res.render('register', {heading : "You've successfully registered 😁"})
                }else{
                    // there was an error
                    res.render('register', {message : "There was an error ☹"})
                }
            })
        }else{
            console.log(err)
        }
    });
    
})

module.exports = router