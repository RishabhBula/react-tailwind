import React from "react";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <>
      <div className="absolute shadow-md z-20 top-10 bg-white gap-2 py-5 px-2.5 right-0 flex flex-col items-start w-52 rounded-6">
        <Link className="hover:text-[#203658]">Login</Link>
        <Link className="hover:text-[#203658]">Logout</Link>
        <Link className="hover:text-[#203658]">Edit Profile</Link>
      </div>
    </>
  );
};

export default Profile;
