import { useEffect , useState} from "react";
import CARD from "../Components/Card";
import axios from "axios";

function MYBlog (){
    const [DataInResponse,setDataInResponse] = useState(["cghvhbh"])

    useEffect(()=>{

        const getData = async ()=>{
            try{
                const response = await axios.get("http://localhost:8000/author/blog",{
                    headers:{
                        "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
     
                    }
                })
                console.log(response.data)
                setDataInResponse(response.data)
            }
            catch(error){
                console.log(error)
            }
           
        }
        
        getData()

    },[])

    return(
        <div>
            <CARD  BlogData={DataInResponse}></CARD>
        </div>
    )
}

export default MYBlog ;