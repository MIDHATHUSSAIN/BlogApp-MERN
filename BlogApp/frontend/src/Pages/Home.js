import { useEffect, useState } from "react"
import CARD from "../Components/Card"
import axios from "axios"
import Protected from "../Protected/Protection"

function HOME (){

    const [BlogData,setBalogData] = useState([])

    useEffect(()=>{

        const gestRequest = async ()=>{
          

            const response = await axios.get("http://localhost:8000/guest")

            setBalogData(response.data)

        }

        gestRequest()

    },[])

    return(
        <div>
            <CARD BlogData={BlogData}></CARD>
            
        </div>
    )
}

export default HOME