import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserTable({ User , setUser}) {

  const navigate = useNavigate()
 
    const DeleteHandler = async(id)=>{
        
        try{

            
       const response =  await axios.delete(`http://localhost:8000/admin/user/${id}`,{
        headers:{
            "Authorization" : `Bearer ${window.localStorage.getItem("token")}`

        }
       })
        const updateUserData = User.filter((u)=> u.id !== id)
        setUser(updateUserData)

        }
        catch(error){

            console.log(error)
        }

    }
    
  return (
    <div>
      <div className="overflow-x-auto">
      <h1>USER TABLE</h1>
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Create Author</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {User? User.map((p,index) => (
              <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.role == 2000 ? ("Admin"): p.role == 3000 ? ("Author") : "Reader"}</td>
                <td>{p.role == 2000 ? (" "): p.role == 3000 ? (" "):(<button className="btn bg-pink-500 text-white" onClick={()=>{navigate(`/create-author/${p.id}`)}}>Create Author</button>)}</td>
                <td>{p.role == 2000 ? (" "):(<button className="btn bg-pink-500 text-white" onClick={()=>DeleteHandler(p.id) }>Delete User</button>)}</td>
              </tr>
            )):(<tr className="bg-base-200">
              <th>1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>)}
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
