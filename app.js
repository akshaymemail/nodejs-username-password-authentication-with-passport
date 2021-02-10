require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')



const app = express()
const PORT = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

//session
app.use(session({
    secret: 'my secret',
    resave: false,
    saveUninitialized : true,
    cookie: {
        maxAge : 1000 * 60 * 60 * 24
    }
}))

//initialization
app.use(passport.initialize())
app.use(passport.session())

// Routers
app.use('/', require('./routes/login'))
app.use('/', require('./routes/register'))
app.use('/', require('./routes/secret'))
app.use('/', require('./routes/logout'))


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => console.log(`listening on port : ${PORT}`))

