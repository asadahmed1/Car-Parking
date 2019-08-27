const carparkingUser_model = require('../models/carparkingUser_model')


const carparkingUse_save = (req,res)=>{
    let newparking = new carparkingUser_model()

    
    newparking.name = req.body.name
    newparking.email = req.body.email
    newparking.password = req.body.password

    newparking.save((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.status(200).json({
                message:"signedup successfully",
                result
            })
        }

    })
}
module.exports =  {
    carparkingUse_save
}
