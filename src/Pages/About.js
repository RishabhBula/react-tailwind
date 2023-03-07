import React from "react";
import FeedBack from "../Components/FeedBack/FeedBack";
import HeaderII from "../Components/HeaderII/HeaderII";
import Hero from "../Components/Hero/Hero";
import Plans from "../Components/Plans/Plans";
const About = () => {
  return (
    <div>
      <HeaderII />
      <Hero title="Uncover Hidden Games With us " subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsa
            ex quas saepe aperiam tempore." about="/home" aboutText="Let's Explore" contact="/contact" contactText="Watch Demo " />
      <Plans />
      <FeedBack />
    </div>
  );
};

export default About;
