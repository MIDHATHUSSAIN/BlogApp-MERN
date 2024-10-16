const CommentModel = require("../../models/Comment.model")

const getComment = async(req,res)=>{

     
    try{

        const findComment = await CommentModel.findAll()

        return res.json(findComment)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

}

const createComment = async(req,res)=>{

    const {comment} = req.body

    try{
       
        const savedComment = await new CommentModel({comment})

        await savedComment.save()

        return res.status(201).json(savedComment)

    }catch(error){

          res.status(500).json({err:error.message})
    }

}

const deleteComment = async(req,res)=>{

    const {id} = req.params

    try{

        
       const deleteComment = await CommentModel.destroy({where:{id}})

       return res.json(deleteComment)

    }
    catch(error){

        res.status(500).json({message:error.message})
    }

}

module.exports = {getComment,deleteComment,createComment}