const jwt = require('jsonwebtoken')
const UserModel = require('../models/User.model')

const authentication = (req,res,next)=>{

    const auth = req.headers.authorization || req.headers.Authorization

    if(!auth){

        return res.json({message:"provide valid token"})
    }

    let token = auth.split(" ")[1]

    jwt.verify(token,'iamtokent',async(error,decoded)=>{

        if(error){

            return res.json(error.message)
        }

        req.id = decoded.id

        const user = await UserModel.findOne({where:{id:req.id}})

        req.role = user.role
        
        next()
    })
}

module.exports = authentication


