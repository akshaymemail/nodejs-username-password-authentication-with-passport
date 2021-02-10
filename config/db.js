const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const passport = require('passport')

// mongodb connection
const url = process.env.DATABASE_STRING
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, options)

// creating the schema
const schema = new mongoose.Schema({
    username : String, 
    password : String
})

// plugins
schema.plugin(passportLocalMongoose)

// crating the model
const User = mongoose.model('user', schema)

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

module.exports = User