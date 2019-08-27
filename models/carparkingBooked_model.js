var mongoose = require('mongoose')
const bookedSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'carparkingUserschema'
    },
    datebooked:{
        type:String
        // default:Date.now
    }

})

bookedSchema.index({userId:1,datebooked:1},{unique:true})

module.exports = mongoose.model('bookedSchema',bookedSchema)