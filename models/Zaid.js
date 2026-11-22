const mongoose = require('mongoose')


// Schema
const zaidSchema = new mongoose.Schema({
    name:{
        type: String
    },
    zaidImage:{
        type: String
    }
})


// model
const Zaid = mongoose.model('Zaid',zaidSchema)

module.exports = Zaid