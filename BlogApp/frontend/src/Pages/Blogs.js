import axios from "axios";
import { useEffect, useState } from "react";
import CARD from "../Components/Card";

function BLOGS (){
    
    const [ALLBlogs,setBlogData] = useState("")

    useEffect(()=>{

        const GetAllBlogs = async()=>{

            const response = await axios.get("http://localhost:8000/admin/blog",{

                headers: {
                    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
                  },
            })

            console.log("i am from blog from admin " ,response.data)

            setBlogData(response.data)

        }
        GetAllBlogs()


    },[]
   )

    return(

        <div className="flex justify-evenly flex-wrap">
            <CARD BlogData={ALLBlogs} ></CARD>
        </div>

    )
}

export default BLOGS;