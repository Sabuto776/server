const mongoose = require('mongoose')

const PatronSchema = new mongoose.Schema({
    IMEI:{
       type:String,
    },
    LAST_CONNECTE:{
        type:String,
    },
    REGISTRATION_TIME:{
        type:String,
    },
    LICENSE_END:{
        type:String,
    },
    STATUS:{
        type:String,
    },
    BOUTIQUE:{
        type:String,
    },
    NAME:{
        type:String,
    },
    TEL:{
        type:String,
    },
    VALUE:{
        type:String,
    },
})

module.exports = mongoose.model('Patron', PatronSchema)