import React from "react";
import { Link } from "react-router-dom";

const NewSidebar = ({ handelClose }) => {
  return (
    <>
      <div className="absolute top-0 right-0  bg-[#203658] text-white w-[300px] p-5 h-fit">
        <h2>This is right modal slider</h2>

        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Home</Link>
          </li>
        </ul>

        <div
          className="flex justify-end cursor-pointer"
          onClick={() => handelClose()}
        >
          Close
        </div>
      </div>
    </>
  );
};

export default NewSidebar;
