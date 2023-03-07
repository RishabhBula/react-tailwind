import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Tailwind from "../../Assets/images/Tailwind.png";
import TailwindMenu from "../../Assets/images/Tailwind_menu.png";
import NewSidebar from "../NewSidebar/NewSidebar";

const Header = () => {
  const [Show, setShow] = useState(false);
  const [isOpen, setIsopen] = useState(false);

  const menuRef = useRef();
  const newsideRef = useRef();

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  const handelClose = () => {
    setIsopen(false);
  };

  // const handelNewSidebar = () => {
  // setNewSidebar(!newSidebar);
  // };

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShow(false);
        setIsopen(false);
      }
    };
    return () => {
      document.addEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <header className="bg-[#bed2ff]">
        <div className="container mx-auto">
          <div className=" relative z-10">
            <div
              ref={menuRef}
              className="container_theme px-20 max-[480px]:px-[12px]"
            >
              <nav className="flex justify-between items-center py-2 ">
                <div className="max-w-[170px] ">
                  <Link to="" onClick={() => ToggleSidebar()}>
                    <img src={Tailwind} alt="Tailwind" />
                  </Link>
                </div>
                <div className="flex">
                  <div className="hidden md:flex py-5 gap-8">
                    <Link to="/">Home</Link>
                    <Link to="/about">about</Link>
                    <Link to="/service">service</Link>
                    <Link to="/contact">contact</Link>
                  </div>
                  <div className="md:hidden py-3.5">
                    <img
                      src={TailwindMenu}
                      alt="Tailwind"
                      className="rotate-[-25deg] max-w-[36px] cursor-pointer"
                      onClick={() => setShow(!Show)}
                    />
                    {Show && (
                      <div className="absolute right-0 top-[80px]  bg-[#bed2ff] drop w-full h-[calc(100vh-80px)]">
                        <div className="flex flex-col gap-5  p-5 radius-2 items-center">
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
              <div ref={newsideRef} className="active  overflow-hidden">
                {isOpen && (
                  <NewSidebar
                    handelClose={handelClose}
                    className="overflow-hidden"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
