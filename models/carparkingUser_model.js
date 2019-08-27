var mongoose = require('mongoose')
const carparkingUserschema = mongoose.Schema({
    name:{
        type:String,
        require:true

    },

    email: {   
        type: String,
        require: true,
        index:{unique:true}
    },
    password:{
        type:String,
        require:true
    },
    enterdate:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model('carparkingUserschema',carparkingUserschema)