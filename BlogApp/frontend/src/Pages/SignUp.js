import { useState } from "react"
import FORM from "../Components/Form"
import axios from "axios"

function SIGNUP (){
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const formHandeller = async(e)=>{
        e.preventDefault()

       await axios.post("http://localhost:8000/auth/register",{name,email,password})
       setName(" ")
       setEmail(" ")
       setPassword(" ")
    }
    return(
        <div>
           <FORM name={name}
                 setName={setName}
                 email={email}
                 setEmail={setEmail}
                 password={password}
                 setPassword={setPassword}
                 formHandeller={formHandeller}
                 label={"SignUp"}
           />
        </div>
    )
}

export default SIGNUP