import { useContext, useState } from "react";
import FORM from "../Components/Form";
import axios from "axios";
import { AuthenticationContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import roles from '../utiles/roles'

function LOGIN (){
    const  {setAuthData}  =  useContext(AuthenticationContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const navigate = useNavigate()

    const formHandeller = async(e)=>{
       e.preventDefault()
       const response =  await axios.post("http://localhost:8000/auth/login",{email,password})
       window.localStorage.setItem("token",response.data.token)
       localStorage.setItem('data',JSON.stringify(response.data))
       response.data.UserData.role == roles.ADMIN ? navigate('/users') :
       response.data.UserData.role == roles.AUTHOR ? navigate('/create-blog')  : 
       response.data.UserData.role == roles.READER ? navigate("/") :
       setAuthData(response.data) 
       setEmail(" ")
       setPassword(" ")
    }

    return(
        <div >
          <FORM email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                formHandeller={formHandeller}
                label={"LogIn"}
          />
        </div>
    )
}

export default LOGIN ;