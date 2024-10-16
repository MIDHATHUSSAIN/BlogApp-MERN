import UserTable from "../Components/UserTable"
import {useState,useEffect} from 'react'
import axios from 'axios'
function UserTablePage (){
     console.log("i am from user table page")
    const [User,setUser] = useState()

    useEffect(()=>{

        const GetUser = async()=>{

            try{
                const response = await axios.get('http://localhost:8000/admin/user',{

                    headers:{
                        "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
        
                    }
                   })
                   console.log(window.localStorage.getItem("token"))
                   console.log("i am respon fron user",response.data)
                   setUser(response.data)
        
                }
            
            catch(error){
                   console.log(error)
            }
           
        }

        GetUser()
    },[]) 


    return (
        <div>
           <UserTable User={User} setUser={setUser}></UserTable>
        </div>
    )
}

export default UserTablePage