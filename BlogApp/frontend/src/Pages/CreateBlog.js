import { useState } from "react";
import BlogFORM from "../Components/BlogFrom";
import axios from "axios";

function CreateBlog (){
    
    const data =JSON.parse(window.localStorage.getItem("data")) 

    const [title,setTitle] = useState("")
    const [description,setDesscription] = useState("")
    const [file,setFile] = useState("")  
    const blogHandeler = async(e)=>{

        e.preventDefault()
         
        const formData = new FormData()
        formData.append('title',title)
        formData.append('description',description)
        formData.append('userId',data.UserData.id)
        formData.append('file',file)
        
        await axios.post('http://localhost:8000/author/blog',formData,{
         headers:{
           "Content-Type" : "multipart/form-data",
            "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
         }
        })
        setDesscription(" ")
        setFile(" ")
        setTitle(" ")
      }

    return(
        <div>
            <BlogFORM title={title}
                      setTitle={setTitle}
                      description={description}
                      setDesscription={setDesscription}
                      file={file}
                      setFile={setFile}
                      blogHandeler={blogHandeler}
                      
            />
        </div>
    )
}

export default CreateBlog;