import React from "react"; // { useRef }
import { Link } from "react-router-dom";
import "./HeaderIII.css";
import Tailwind from "../../Assets/images/Tailwind.png";

function HeaderIII() {
  // navRef = useRef();

  // const navbarShow = () => {
  //   navRef.current.classlist.toggel("shownavbar");
  // };

  return (
    <header className="flex items-center justify-between h-[80px] px-4 bg-[#29355c] text-white">
      <div className="w-44">
        <img src={Tailwind} alt="" className="invert-[100]" />
      </div>
      <nav
        // ref={navRef}
        className="flex gap-4 items-center hidden md:flex"
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
        <button className="p-2 md:invisible md:opacity-0">X</button>
      </nav>
      <div>
        <button className="hidden md:flex">Login / Signup</button>
        <div className="flex gap-4 items-center flex md:hidden">
          <button>Login / Signup</button>
          <button>Menu</button>
        </div>
      </div>
    </header>

  );
}

export default HeaderIII;
