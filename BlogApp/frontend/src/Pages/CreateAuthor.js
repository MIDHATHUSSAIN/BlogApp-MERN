import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UPDATEAUTHORANDCREATE from "../Components/updateform";

function CreateAuthor() {
  const { userId } = useParams();
  console.log("i am userId form create Author", userId);

  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [role, setrole] = useState("");

  const createAuthorHandeller = async (e) => {
    e.preventDefault();
    try {
      const respone = await axios.post(
        "http://localhost:8000/admin/author",
        {experience, bio, role, userId },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );

      console.log(respone);
      setExperience(" ");
      setBio(" ");
      setrole(" ");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <UPDATEAUTHORANDCREATE
        experience={experience}
        setExperience={setExperience}
        bio={bio}
        setBio={setBio}
        role={role}
        setrole={setrole}
        label={"CREATE AUTHOR"}
        createAuthorHandeller={createAuthorHandeller}
      />

      {/* <form onSubmit={createAuthorHandeller}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Author Name</span>
                    </div>
                    <input type="text" placeholder="Author Name" className="input input-bordered w-full max-w-xs" onChange={(e) => { setName(e.target.value) }} />

                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Experience</span>
                    </div>
                    <input type="text" placeholder="Experience" className="input input-bordered w-full max-w-xs" onChange={(e) => { setExperience(e.target.value) }} />

                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Bio</span>
                    </div>
                    <input type="text" placeholder="Bio" className="input input-bordered w-full max-w-xs" onChange={(e) => { setBio(e.target.value) }} />

                </label>
                
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Pick the best fantasy franchise</span>
                        <span className="label-text-alt">Alt label</span>
                    </div>
                    <select className="select select-bordered" value={role} onChange={(e)=>{setrole(e.target.value)}}>
                        <option disabled selected>Select Role</option>
                        <option value="4000">Reader</option>
                        <option value="3000">Author</option>
                        <option value="2000">Admin</option>
                    </select>
                    
                </label>
                <button className="btn bg-pink-500 text-white">Create Author</button>
            </form> */}
    </div>
  );
}

export default CreateAuthor;
