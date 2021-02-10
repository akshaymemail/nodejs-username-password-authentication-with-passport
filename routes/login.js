const express = require('express')
const User = require('../config/db')
const bcrypt = require('bcrypt')

const router = express.Router()

router.get('/login', (req, res) => {
    res.render('login', {heading : 'Login'})
})

router.post('/login', (req, res) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if(!err) {
            // check for user
            if(user){
                // user found now check for password
                bcrypt.compare(req.body.password, user.password, function(err, result) {
                    if(!err) {
                        if(result){
                            // right credintials found
                            res.render('secret')
                        }else{
                            // username or password is invalid
                        res.render('login', {heading : 'Worng password! 🙄'})
                        }
                    }else{
                        console.log(err)
                    }
                });
            }else{
                //user not found
                res.render('login', {heading : 'User not found! ☹'})
            }
        }else{
            // there was an error
            console.log(err)
        }
    })
})

module.exports = router