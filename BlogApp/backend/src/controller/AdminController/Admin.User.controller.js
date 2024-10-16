const AuthorModel = require("../../models/Author.model")
const UserModel = require("../../models/User.model")
const bcrypt = require('bcrypt')
const getUser = async(req,res)=>{

    try{

        const getUser = await UserModel.findAll()

        return res.json(getUser)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

}

const createUser = async(req,res)=>{
      
    const {name,email ,password} = req.body

    try{
        
  
        if(!(validator.isEmail(email))){
   
           return res.json({message : "please provide valid email"})
        }
        if(!(validator.isStrongPassword(password))){
          
           return res.json({message:"please enter Strong Password"})
        }
      
      const findUser = await UserModel.findOne({where:{email}}) 
      
       if(findUser){
          return res.json({message:"thie user already exsist"})
       }
  
       const hashPassword = await bcrypt.hash(password, 10)
       
       const user = await UserModel.create({name,email,password:hashPassword})
       return res.json(user)
  
      }
      catch(error){
          
        res.status(500).json({message:error.message})
      }
      

}

const updateUser = async(req,res)=>{

    const {id} = req.params

    const {name,email,password} = req.body

    try{
       
        const hashPassword = await bcrypt.hash(password, 10)

        const updateUser = await UserModel.update({name,email,password:hashPassword},{where:{id}})

        return res.json(updateUser)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

}

const deleteUser = async(req,res)=>{

    const {id} = req.params

   

    try{
       
      await AuthorModel.destroy({where:{userId:id}}) 
       const deleteUser = await UserModel.destroy({where:{id}})

       return res.json(deleteUser)

    }
    catch(error){
       
        console.log(error)
        res.status(500).json({message:error.message})
    }

}

module.exports = {getUser,createUser,updateUser,deleteUser}