const carparkingBooked_model = require('../models/carparkingBooked_model')
// const carparkingUser_controller = require('../models/carparkingUser_model')

const carparkingBooked= (req,res)=>{
  
   
    // var datetime = Date.now();
    
//     console.log(datetime);
// return;
    carparkingBooked_model.find({userId:req.body.userId,datebooked:req.body.arrivalDate},(err,result)=>{
      
    //    console.log(result);
    //    return false;
       if ( result == '' ) {
            let newSlot = new carparkingBooked_model()
            newSlot.userId = req.body.userId
            newSlot.datebooked = req.body.arrivalDate
         
            newSlot.save((err,result)=>{
                if(err){
                    res.send(err);
                    return false;
                    res.status(500).json({
                        message:"erroor"
                    })
                }else{
                    res.status(200).json({
                        message:'Reservation confirmed',result
                    })
                }
                })

       }else{
           res.json({
               code : 500, 
               mesg: err
           })
       }
        // if(!datetime==enterdate){
        //     res.status(500).json({
        //         message:"err",result
        //     })
        // }else{
        //     let newSlot = new carparkingBooked_model()
        //     newSlot.userId = req.body.userId
         
        //     newSlot.save((err,result)=>{
        //         if(err){
        //             res.status(500).json({
        //                 message:"erroor"
        //             })
        //         }else{
        //             res.status(200).json({
        //                 message:'Reservation confirmed',result
        //             })
        //         }
        //         })

        // }
    })
}



module.exports = {
    carparkingBooked
}