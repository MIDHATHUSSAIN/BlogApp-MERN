import { useContext } from "react"
import { CreateContext } from "../Context/AuthContext"


const useAuth = ()=>{

    return useContext(CreateContext)
    
}

export default useAuth;