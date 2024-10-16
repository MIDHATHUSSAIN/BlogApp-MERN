const BlogModel = require('../models/Blog.model')

const GuestGetBlog = async(req,res)=>{

    try{

        const findBlog = await BlogModel.findAll()

        return res.json(findBlog)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }
     

}

module.exports = GuestGetBlog