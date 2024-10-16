import axios from "axios";
import roles from "../utiles/roles";
import { useState } from "react";
function CARD({ BlogData }) {
  const data = JSON.parse(window.localStorage.getItem("data"));
  const [comment,setComment] = useState("")
  const [readerId,setreaderId] = useState("") 

  const deleteBlog = async(id) => {
    await axios.delete(`http://localhost:8000/admin/blog/${id}`, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
    });
  };

  const AddComment = async(e) => {
    e.preventDefault()
    if(data?.UserData?.role == roles.READER){
      try {
        
        await axios.post('http://localhost:8000/reader/comment',{comment,readerId} ,{
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });

      } catch (error) {
          console.log(error)
      }
    }if(data?.UserData?.role == roles.ADMIN){
      try {
        
        await axios.post('http://localhost:8000/admin/comment',{comment,readerId} ,{
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });

      } catch (error) {
          console.log(error)
      }
    }
    else{
      try {
        
        await axios.post('http://localhost:8000/author/comment',{comment,readerId} ,{
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        });

      } catch (error) {
          console.log(error)
      }
    }
    
  };
 

  return (
    <div
      id="free-book"
      className="flex flex-wrap justify-evenly gap-10 items-center md:mt-2 sm:ml-4"
    >
      {BlogData ? (
        BlogData.map((p) => (
          <div className="card bg-base-100 w-96 iam md: mt-8">
            <figure>
              <img src={p.image} alt="Shoes" id="book" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Title :{p.title}
                <div className="badge badge-secondary">Author : {p.name}</div>
              </h2>
              <p>Description : {p.description}</p>
              <div className="card-actions justify-end">
                {data?.UserData?.role == roles.ADMIN ? (
                  <button
                    className="btn bg-pink-500 text-white"
                    onClick={() => {
                      deleteBlog(p.id);
                    }}
                  >
                    Delete Blog
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            {/* {(data?.UserData?.role == roles.ADMIN || data?.UserData?.role == roles.AUTHOR || data?.UserData?.role == roles.READER )? (<div className="w-[23rem] h-1 abc ml-[0.5rem]"/>) : ""} */}
           {(data?.UserData?.role == roles.READER || data?.UserData?.role == roles.ADMIN  || data?.UserData?.role == roles.AUTHOR)? (<div className=" w-[22rem] ml-4">
              <form onSubmit={AddComment}>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Add Comment</span>
                  </div>
                  <textarea  
                    value={comment}
                    onChange={(e)=>{setComment(e.target.value)}}
                    className="textarea textarea-bordered h-24 w-[17rem] ml-7"
                    required 
                    placeholder="Comment"
                  ></textarea>
                </label><br/>
                <button type="submit" onClick={()=>{setreaderId(p.id)}} className="btn ml-[15rem] text-white" >Comment</button>
              </form>
              <br/>
            </div>):" "}
            
          </div>
        ))
      ) : (
        <h1>No Blogs</h1>
      )}
    </div>
  );
}

export default CARD;
