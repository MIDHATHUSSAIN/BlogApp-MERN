import axios from "axios";
import { useNavigate } from "react-router-dom";


function ADMINTABLEFORAUTHOR({ Authors }) {

  const navigate = useNavigate()

  const DeleteHandlerr = async(id)=>{
        
      try{

        
          const response =  await axios.delete(`http://localhost:8000/admin/author/${id}`,{
          headers:{
            "Authorization" : `Bearer ${window.localStorage.getItem("token")}`

           }
        })
   
      } 
    catch(error){

        console.log(error)
      }

  }
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Experience</th>
              <th>Bio</th>
              <th>Update Author</th>
              <th>Delete Author</th>
              <th>Create Blog</th>
            </tr>
          </thead>
          <tbody>
            {Authors? Authors.map((p,index) => (
              <tr className="bg-base-200">
                <th>{index +1}</th>
                <td>{p.name}</td>
                <td>{p.experience}</td>
                <td>{p.bio}</td>
                <td><button className="btn bg-pink-500 text-white" onClick={()=>{navigate(`/update-author/${p.id}`)}}>Update Author</button></td>
                <td>{p.role == 2000 ? (" "):(<button className="btn bg-pink-500 text-white" onClick={()=>DeleteHandlerr(p.id) }>Delete Author</button>)}</td>
                <td><button className="btn bg-pink-500 text-white" onClick={()=>{navigate(`/adminCreate-blog/${p.id}`)}}>Create Blog</button></td>
              </tr>
            )):(<tr className="bg-base-200">
              <th></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
              )}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ADMINTABLEFORAUTHOR;
