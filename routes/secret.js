const express = require('express')

const router = express.Router()

router.get('/secret', (req, res) => {
    if(req.isAuthenticated()){
        res.render('secret')
    }else{
        res.redirect('/login')
    }
})

module.exports = router