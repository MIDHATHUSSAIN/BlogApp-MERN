const AuthorModel = require("../../models/Author.model")
const BlogModel = require("../../models/Blog.model")
const UserModel = require("../../models/User.model")
const getBlogs = async(req,res)=>{

    try{

        const findBlog = await BlogModel.findAll()

        return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

    
}

const getBlog = async(req,res)=>{
      
      const {id} = req.params
    try{

        const findBlog = await BlogModel.findAll({where:{id}})

        return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

    
}
const createBlog = async(req,res)=>{

    const {title,description,authorId} = req.body
    console.log(authorId)
    const author = await AuthorModel.findOne({where:{id:authorId}})
    const user = await UserModel.findOne({where :{id:author.userId}})

    try{
        const savedFile = await new BlogModel({image:req.file.filename,name:user.name,title,description,authorId:authorId})
        await savedFile.save()
        return res.json(savedFile)

    }catch(error){
          console.log(error)
          res.status(500).json({err:error.message})
    }


}

const updateBlog = async(req,res)=>{
        
    const {id} = req.params
    const {title,description} = req.body

    try{

        const findBlog = await BlogModel.update({image:req.file.filename,title,description},{where:{id}})

       return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }


}

const deleteBlog = async(req,res)=>{

    const {id} = req.params

    try{
        
        const findBlog = await BlogModel.destroy({where:{id}})

        return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

}

module.exports = {getBlogs ,getBlog,createBlog ,updateBlog ,deleteBlog}