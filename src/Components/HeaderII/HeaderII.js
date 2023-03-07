import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Tailwind from "../../Assets/images/Tailwind.png";
import TailwindMenu from "../../Assets/images/hamber-2-r.png";
import useIcon from "../../Assets/images/svg/userIcon.svg";
import "./HeaderII.css";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
// import Sidebar from "../Sidebar/Sidebar";

const HeaderII = () => {
  const [show, setShow] = useState(false);
  const [sideShow, setSideShow] = useState(false);
  const [isActive, setActive] = useState(false);
  const [isUser, setUser] = useState(false);
  const menuRef = useRef();
  const userRef = useRef();

  const handelSideBar = () => {
    setSideShow(!sideShow);
    setActive(!isActive);
  };
  const handelUser = () => {
    setUser(!isUser);
  };

  const handelNav = () => {
    setActive(false);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
        setSideShow(false);
        setActive(false);
        setUser(false);
      }
    };

    return () => {
      document.addEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <header className="bg-[#203658] relative">
        <div className="container mx-auto">
          <div className="container_theme px-20 max-[480px]:px-[12px]">
            <nav className="flex justify-between items-center py-2" ref={menuRef}>
              <div className="max-w-[170px]">
                <Link to="" onClick={() => handelSideBar()}>
                  <img src={Tailwind} alt="Tailwind" className="invert" />
                </Link>
              </div>
              {/* Sidebar used here */}
              <div className={isActive ? "after" : "before"} ref={menuRef}>
                <Sidebar handelNav={handelNav} />
              </div>
              <div className="flex gap-5 items-center" ref={menuRef}>
                <div className="relative" ref={userRef}>
                  <img
                    src={useIcon}
                    alt=""
                    onClick={() => handelUser()}
                    className="cursor-pointer"
                  />
                  {isUser && <Profile />}
                </div>

                <div className="py-3.5 ">
                  <img
                    src={TailwindMenu}
                    alt="Tailwind"
                    className="max-w-[36px] cursor-pointer invert"
                    onClick={() => setShow(!show)}
                  />
                  {show && (
                    <div className="absolute right-0 top-[80px] z-10  bg-[#203658] drop w-full h-[calc(100vh-80px)]">
                      <div className="flex flex-col gap-5  p-5 radius-2 items-center text-white">
                        <Link to="/">Home</Link>
                        <Link to="/about">about</Link>
                        <Link to="/service">service</Link>
                        <Link to="/contact">contact</Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderII;
