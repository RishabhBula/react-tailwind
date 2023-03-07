import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
// import SidebarBox from "./SidebarBox";
// import { Link } from "react-router-dom";

const Sidebar = ({ handelNav }) => {
  // const [Show, setShow] = useState(false);
  const [NavShow, setNavShow] = useState(false);

  const navRef = useRef();

  const navToggle = () => {
    setNavShow(!NavShow);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!navRef.current.contains(e.target)) {
        // setShow(false);
        setNavShow(false);
      }
    };
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <div className="sidebar fixed top-0 z-10 h-full left-0" ref={navRef}>
        <div className="opacity-1 w-72 p-4 bg-[#203856] text-white h-full transition duration-300 ease-out">
          <div className="close_btn flex justify-end">
            <button onClick={() => handelNav()}>X</button>
          </div>
          <div className="my-10">
            <ul className="flex flex-col items-start gap-4">
              <li
                onClick={() => navToggle()}
                className="bg-[#8e8aa1] rounded-[6px] cursor-pointer text-black px-2 py-1 w-full relative"
              >
                list item 1
              </li>
              {NavShow && (
                <div className="bg-[#8e8aa1] rounded-[6px]  text-black px-2 w-full ">
                  <div className="flex flex-col">
                    <Link>More About</Link>
                    <Link>More About 2</Link>
                    <Link>More About 3</Link>
                  </div>
                </div>
              )}
              <li className="bg-[#8e8aa1] rounded-[6px]  cursor-pointer text-black px-2 py-1 w-full relative">
                list item 1
              </li>
              <li className="bg-[#8e8aa1] rounded-[6px]  cursor-pointer text-black px-2 py-1 w-full relative">
                list item 1
              </li>
              <li className="bg-[#8e8aa1] rounded-[6px]  cursor-pointer text-black px-2 py-1 w-full relative">
                list item 1
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
