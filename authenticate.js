require("dotenv").config();
const jwt = require("jsonwebtoken")
const verifyToken = (token) =>{
   return new Promise((resolve,reject)=>{
       return jwt.verify(token, process.env.JWT_KEY,(err,user)=>{
           if(err) return reject(err);
           resolve(user);
       })
   })
}

module.exports= async (req,res,next)=>{
    console.log(req.headers.authorization)
    if(!req.headers.authorization)
    return res.status(404).send({
        message:"authorization token was not provided or was not valid",
    });
   if(!req.headers.authorization.startsWith("Bearer"))
   return res.status(405).send({
    message:"authorization token was not provided or was not valid",
   });
   const token=req.headers.authorization.split(" ")[1]
   console.log(token)
    let user;
   try{
    user= await verifyToken(token)
   }
   catch(err){
    return res.status(408).send({
        message:"authorization token was not provided or was not valid",
       });
   }
   req.user=user.user;
    console.log("user",req.user)
    return next();
}
