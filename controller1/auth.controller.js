require("dotenv").config();
const User = require("../models1/user.model")
var jwt = require('jsonwebtoken');

const newToken = (user) =>{
    return jwt.sign({ user }, ""+process.env.JWT_KEY);
    

}

const register = async(req,res) => {
    try{
        let user = await User.findOne({email:req.body.email}).lean().exec()

        if(!user==null) return res.status(400).send({message:"please try another email"});

        user = await User.create(req.body);

        const token = newToken(user)


        res.send({user, token})

    }
    catch(err){
        return res.status(500).send(err.message)
    }
}

const login = async (req, res) => {
    try{
        let user = await User.findOne({email: req.body.email})
        if(!user) 
         return res.status(400).send({message:"invalid email or password"})
       
         let match = user.checkPassword(req.body.password)

         if(!match) return res.status(400).send({message:"invalid email or password"})

         const token = newToken(user)


         res.send({user, token})

        
    }
    catch(err){
        return res.status(500).send(err.message)
    }
}


module.exports = {register,login,newToken}