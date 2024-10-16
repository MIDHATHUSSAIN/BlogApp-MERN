
const { where } = require("sequelize")
const AuthorModel = require("../../models/Author.model")
const UserModel = require("../../models/User.model")

const getAuthor = async(req,res)=>{
    
    try{

        const findAuthor = await AuthorModel.findAll()

        return res.json(findAuthor)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }
    
}

const createAuthor = async(req,res)=>{
    
    const {experience,bio,role,userId} = req.body 

    const findname = await UserModel.findOne({where:{id:userId}})


    try{

        const findAuthor  = await AuthorModel.findOne({where:{userId}})
        if(findAuthor){

            return res.status(409).json({message:"Author Already exsist"})
        }
        // is waqat to admin login hai to author k table me jo froeign kay hai us ko kese set kren gy
        await UserModel.update({ role: role }, { where: { id: userId } });
    
        const savedAuthor = await new AuthorModel({name:findname.name ,experience,bio,userId:userId})
        await savedAuthor.save()
        return res.status(201).json(savedAuthor)

    }catch(error){
        
          res.status(500).json({err:error.message})
    }

}

const  updateAuthor = async(req,res)=>{
    
    const {id} = req.params

    const {name,experience,bio} = req.body

    try{
         
        const findAuthor = await AuthorModel.update({name,experience,bio},{where:{id}})

        return res.json(findAuthor)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

   

}

const deleteAuthor = async(req,res)=>{

    const {id} = req.params

    const finda = await AuthorModel.findOne({where:{id}})

    await UserModel.update({role : "4000" },{where:{id:finda.userId}})

    try{
       
          
       const findAuthor = await AuthorModel.destroy({where:{id}})

       return res.json(findAuthor)

    }
    catch(error){
        console.log(error)
        res.status(500).json({message:error.message})
    }

}




module.exports = { getAuthor, createAuthor, updateAuthor, deleteAuthor } 