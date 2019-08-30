var express = require('express');
var mongoose = require('mongoose')
var cors = require('cors') 
var bodyParser = require('body-parser')
var path = require('path')
var routes = require('./routes/carparkingRoute')
var bcrypt = require('bcrypt-node')
var jwt = require('jsonwebtoken')
var carparkinguserModel = require('./models/carparkingUser_model') 
 


var app = express();
const port= 5000



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));
 
//database

mongoose.connection.openUri('mongodb://localhost:27017/carparking',{useNewUrlParser:true});
mongoose.connection.on('connected',() => {
    console.log("connected to db")
})
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(`Conenction failed ${err}`)
    }
})
//here we will use verifyToken function of jwt 
app.use('/api', verifyToken, routes)
 

//Verify Token 
function verifyToken(req, res, next){
    //Get Auth Header value
    const bearerHeader = req.headers['authorization'];
    // check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        //siplit at space
        const bearer = bearerHeader.split(' ');
        // get token from array
        const bearerToken = bearer[1];
        //set token
        req.token = bearerToken;
        //Next middleware
        jwt.verify(req.token, 'secretkey', (err, authData) =>{
            if(err){
                res.status(403).send(err);
            }
            else{
                req.authData=authData;
                next();
            }
        })
    } 
    else {
        res.status(403).json({
            msg : "Forbidden"
        })
    }
}
 
//listen port
app.listen(process.env.PORT||port,()=>{
    console.log(`Port ${port}`)
})