import { useParams } from "react-router-dom";
import BlogFORM from "../Components/BlogFrom";
import axios from "axios";
import { useState } from "react";

function AdminCreateBlog (){

    const {authorId} = useParams()

    const [title,setTitle] = useState("")
    const [description,setDesscription] = useState("")
    const [file,setFile] = useState("")  

    const blogHandelerrr = async(e)=>{

        e.preventDefault()
        
        const formData = new FormData()
        formData.append('title',title)
        formData.append('description',description)
        formData.append('authorId',authorId)
        formData.append('file',file)
       
       const response = await axios.post("http://localhost:8000/admin/blog",formData,{

            headers:{
                "Content-Type" : "multipart/form-data",
                "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
    
               }
        })
        console.log((response.err))
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
                      blogHandeler={blogHandelerrr}
                      
            />
        </div>
    )
}

export default AdminCreateBlog;