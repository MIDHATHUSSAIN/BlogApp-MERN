// import { createContext, useState } from "react"

// export const CreateContext = createContext()
// function AuthContext ({children}){
    
//     const [AuthDetails,setAuthDetails]= useState({})  
    
//     return(
//         <CreateContext.Provider value={{AuthDetails,setAuthDetails}}>
//            {children}
//         </CreateContext.Provider>
//     )
// }

// export default AuthContext

import {createContext , useState } from 'react'

export const AuthenticationContext  = createContext()

 function AuthContext ({children}){
     
    const [AuthData,setAuthData] = useState([{name:" ", email: " ",role: " " , token:" " }])

    return (

        <AuthenticationContext.Provider value = {{AuthData,setAuthData}}>

            {children}

               
        </AuthenticationContext.Provider>
    )
 }


 export default AuthContext