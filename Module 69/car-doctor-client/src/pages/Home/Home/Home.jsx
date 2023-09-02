import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
      <Team />
    </div>
  );
};

export default Home;
