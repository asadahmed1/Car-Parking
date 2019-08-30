const carparkingUsermodel = require('../models/carparkingUser_model')
var bcrypt = require('bcrypt-node')
var jwt = require('jsonwebtoken')


const carparkingSave = (req,res,next)=>{
    let newparking = new carparkingUsermodel();

    
    newparking.name = req.body.name;
    newparking.email = req.body.email;
    newparking.password = req.body.password;
    console.log(newparking)

    newparking.save((err,result)=>{
        
        if(err){
            res.send(err);
        }
        else{
            res.status(200).json({
                message:"signedup successfully",
                result
            })
        }

    })
}

// const carparkingUser_login = (req,res)=>{
    
//     carparkingUser_model.findOne({email:req.body.email},(err,result)=>{
//         if(result != ''){
//             result.comparePassword(req.body.password,function(err,isMatch){
//                 if (err){
//                     res.send(err)
//                 }
//                 else{
//                     res.send(isMatch)
//                 }
//             })
//            res.send("succefully login")
//         }
//         else{
//             res.send("error")
//         }
       
//     })

    // carparkingUser_model.comparePassword(req.body.password,(err,result)=>{
    //     if(err){
    //         res.send("Error")

    //     }else{
    //         res.send('login'+result)
    //     }
    // })

    // fetch user and test password verification
  const  carparkingUser_login = (req, res, next) => {
        // fetch user and test password verification
        carparkingUsermodel.findOne({ email: req.body.email }, function(err, user) {
            if(err){
                res.status(500).json({
                    message: "error",
                    err
                })
            }
            else{   
                //compare
                user.comparePassword(req.body.password, function(err, isMatch) {
                    if(isMatch)
                    {
                        jwt.sign({user}, 'secretkey', {expiresIn: '3000s'}, (err, token)=>{
                            
                                if(err){
                                    res.send(err)
                                }
                                else{
                                    res.status(200).json({
                                        user,
                                        token
                                    })
                                }
                        });
                    }
                    else {
                        res.send("Invalid Password. Please try again");
                    }
                    
                    
                    
                });
             
                
            }
    
            
        });
    }
    
module.exports =  {
    carparkingSave,
    carparkingUser_login
}
