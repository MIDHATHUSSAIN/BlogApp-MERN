import {useEffect, useState } from "react"
import ADMINTABLEFORAUTHOR from "../Components/AuthorTable"
import axios from "axios"

function ADMIN (){
   const [Authors,setAuthors] = useState([])
    useEffect(()=>{

        const getAuthours = async()=>{

            const response = await axios.get("http://localhost:8000/admin/author",{

                headers:{
                     "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
                }
            }
              
            )
            
            setAuthors(response.data)
            
        }

        getAuthours()

    },[])
         
    return(
        <div>

            <ADMINTABLEFORAUTHOR Authors={Authors}></ADMINTABLEFORAUTHOR>

        </div>
    )
}

export default ADMIN