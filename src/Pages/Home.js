import React from "react";
import Cards from "../Components/Cards/Cards";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import LoginForm2 from "../Components/LoginForm2/LoginForm2";
import Plans from "../Components/Plans/Plans";


const Home = () => {
  return (
    <div>
      <Header />
      <Hero title="Uncover Hidden Games With us " subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsa
            ex quas saepe aperiam tempore." about="/home" aboutText="Let's Explore" contact="/contact" contactText="Watch Demo " />
      <Plans />

      <Cards />
      <LoginForm2 />
    </div>
  );
};

export default Home;
