import { useContext } from "react"
import { AuthenticationContext } from "../Context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import roles from "../utiles/roles"
function Protected (){

    const {AuthData} = useContext(AuthenticationContext)

    const data = JSON.parse(localStorage.getItem('data'))
     console.log("i am AuthData",AuthData)

     console.log("test",AuthData?.UserData?.role == roles.ADMIN )
    return(
        <div>
           {data?.UserData?.role == roles.AUTHOR ? (<Outlet></Outlet>) : " "}
           {data?.UserData?.role == roles.ADMIN ? (<Outlet></Outlet>) : " " }
           {data?.UserData?.role == roles.READER ?(<Outlet></Outlet>) : " "}
        </div>
    )
}

export default Protected