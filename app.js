require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')



const app = express()
const PORT = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Routers
app.use('/', require('./routes/login'))
app.use('/', require('./routes/register'))
app.use('/', require('./routes/secret'))


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => console.log(`listening on port : ${PORT}`))

