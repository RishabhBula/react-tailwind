import React from "react";
import Form from "../Components/Form/Form";
import HeaderII from "../Components/HeaderII/HeaderII"
import Hero from "../Components/Hero/Hero";
import Plans from "../Components/Plans/Plans";

const Contact = () => {

  return (
    <>
      <HeaderII />
      <Hero title="Uncover Hidden Games With Contact Us" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsa
            ex quas saepe aperiam tempore." about="/" aboutText="Let's Explore" contact="/contact" contactText="Watch Demo " />
      <Plans />
      <Form />
    </>

  );
};

export default Contact;
