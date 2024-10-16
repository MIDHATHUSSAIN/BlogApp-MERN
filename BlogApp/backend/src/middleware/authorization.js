
const authorization = (allowed)=>{

    return (req,res,next)=>{

        if(allowed == req.role){
            
            next()
        }
        else{
            return res.json({message: "not allwoed"})
        }
    }
}

module.exports = authorization