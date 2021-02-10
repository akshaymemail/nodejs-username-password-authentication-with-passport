const mongoose = require('mongoose')

// mongodb connection
const url = process.env.DATABASE_STRING
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, options)

// creating the schema
const schema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    }, password : {
        type : String,
        required : true
    }
})


// crating the model
const User = mongoose.model('user', schema)

module.exports = User