import React, { useState, useRef } from "react"; // useState, useRef
import { Link } from "react-router-dom";
import HeroBanner from "../../Assets/images/HeroBanner.jpg";

const Hero = (props) => {
  const [value, setValue] = useState();
  const valueref = useRef();
  const valued = (e) => {
    if (valueref.current.value) {
      setValue(valueref.current.value)
    }
    if (valueref.current.value === "") {
      setValue(false)
      setValue("please enter validate value")
    }
  };



  return (
    <div
      className="sm:h-[450px] h-[70vh] relative"
      style={{
        background: `url(${HeroBanner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }
      }
    >

      <div className="overlay absolute bg-[#00000050] flex w-full h-full items-center justify-center">
        <div className="w-full md:w-[600px] text-center flex flex-col gap-5 ">
          <h1 className="text-2xl md:px-0 px-2 md:text-5xl text-white md:leading-[60px]">
            {/* <div className="text" > Uncover Hidden Games With us </div> */}
            {props.title}
          </h1>
          <p className="text-white md:px-16">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsa
            ex quas saepe aperiam tempore. */}
            {props.subtitle}
          </p>
          <div className="text-white flex justify-center gap-5 items-center">
            <Link to={props.about} className="bg-white border px-4 rounded-radius py-2 text-black hover:text-white hover:bg-[transparent]">
              {/* Let's Explore */}
              {props.aboutText}
            </Link>
            <Link to={props.contact} className="bg-white border px-4 rounded-radius py-2 text-black hover:text-white hover:bg-[transparent]">
              {/* Watch Demo */}
              {props.contactText}
            </Link>
          </div>
          <div className="flex justify-center px-4 sm:gap-0 gap-4 sm:flex-row flex-col">
            <input
              className="px-3 py-2 rounded-l-lg  outline-0"
              type="text"
              placeholder="input your text here"
              ref={valueref}
            />
            <Link
              onClick={() => valued()}
              className="bg-white border px-4 rounded-r-lg py-2.5 text-black hover:text-white hover:bg-[transparent]"
            >
              Get Value
            </Link>
          </div>
          <span className="text-2xl">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
