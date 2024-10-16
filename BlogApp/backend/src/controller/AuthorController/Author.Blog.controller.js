
const AuthorModel = require("../../models/Author.model")
const BlogModel = require("../../models/Blog.model")
const UserModel = require("../../models/User.model")

const AuthorGetBlog = async(req,res)=>{
      
    const id = req.id

    try{
        
        const findAuthorTable = await AuthorModel.findOne({where:{userId:id}})

        const findBlog = await BlogModel.findAll({where:{authorId:findAuthorTable.id}})

        return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

    
}

const AuthorCreateBlog = async(req,res)=>{
    
    const {title,description} = req.body

    const id = req.id
    const user = await UserModel.findOne({where:{id}})

    try{
        const findAuthorTable = await AuthorModel.findOne({where:{userId:id}})
        const savedFile = await new BlogModel({image:req.file.filename,name:user.name,title,description,authorId:findAuthorTable.id})
        await savedFile.save()
        return res.json(savedFile)
    }
    catch(error){
          res.status(500).json({err:error.message})
    }

}

const AuthorUpdateBlog = async(req,res)=>{
    
    const id = req.params

    try{

        const findBlog = await BlogModel.update({where:{id}})

       return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

    

}

const AuthorDeleteBlog = async(req,res)=>{

    const id = req.params

    try{
        
        const findBlog = await BlogModel.destroy({where:{id}})

        return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

    

}


module.exports = {AuthorGetBlog ,AuthorCreateBlog ,AuthorDeleteBlog ,AuthorUpdateBlog}