function UPDATEAUTHORANDCREATE({experience,setExperience,bio,setBio,role,setrole,label,createAuthorHandeller}) {
  return (
    <div className=" flex justify-center items-center ">
      <div className="sm:w-[30rem] sm:h-[40rem] w-[25rem] h-[37rem]  border-2 ii rounded-3xl sm:mt-[5rem] mt-[3rem] ">
        <form onSubmit={createAuthorHandeller} className="md:w-[20rem] h-[10rem] sm:mx-16 md:ml-[5rem] sm:mt-12 text-center mx-8 mt-6">
        <h1 className="text-center text-4xl grow font-bold ">{label}</h1><br/><br/>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Experience</span>
            </div>
            <input
              value={experience}
              type="text"
              required
              placeholder="Experience"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setExperience(e.target.value);
              }}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Bio</span>
            </div>
            <input
              value={bio}
              type="text"
              required
              placeholder="Bio"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </label>
         {label == "CREATE AUTHOR" ? ( <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">
                Select Role
              </span>
             
            </div>
            <select
              className="select select-bordered"
              required
              value={role}
              onChange={(e) => {
                setrole(e.target.value);
              }}
            >
              <option disabled selected>
                Select Role
              </option>
              <option value="4000">Reader</option>
              <option value="3000">Author</option>
              <option value="2000">Admin</option>
            </select>
          </label>): ""}
          <br/>
          <button className="btn text-white w-[20rem] mb-[1rem] ">{label}</button>
        </form>
      </div>
    </div>
  );
}

export default UPDATEAUTHORANDCREATE;