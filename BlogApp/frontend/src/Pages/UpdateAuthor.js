import { useState } from "react"
import UPDATEAUTHORANDCREATE from "../Components/updateform"
import axios from "axios"
import { useParams } from "react-router-dom"


function UPDATEAUTHOR (){

    const { userId } = useParams()

    const [experience, setExperience] = useState("")
    const [bio, setBio] = useState("")
   
    const UpdateAuthorHandeller = async (e) => {
        e.preventDefault()
        try {

            const respone = await axios.patch(`http://localhost:8000/admin/author/${userId}`, {experience, bio}, {
                headers: {
                    "Authorization": `Bearer ${window.localStorage.getItem("token")}`
                }

            })

            console.log(respone)
            setExperience(" ")
            setBio(" ")
         

        }
        catch (error) {

            console.log(error)
        }
    }

    return (
        <div>
            <UPDATEAUTHORANDCREATE 
                   experience={experience}
                   setExperience={setExperience}
                   bio={bio}
                   setBio={setBio}
                   label={"UPDATE AUTHOR"}
                   createAuthorHandeller={UpdateAuthorHandeller}
            />
        </div>
    )
}

export default UPDATEAUTHOR;