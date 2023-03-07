import React from "react";
import Cards from "../Components/Cards/Cards";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Plans from "../Components/Plans/Plans";
import LoginForm from "../Components/LoginForm/LoginForm";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero title="Uncover Hidden Games With us " subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsa
            ex quas saepe aperiam tempore." about="/home" aboutText="Let's Explore" contact="/contact" contactText="Watch Demo " />
      <Plans />
      <LoginForm />
      <Cards />
    </div>
  );
};

export default Home;
