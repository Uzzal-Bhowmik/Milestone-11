import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Services />
    </div>
  );
};

export default Home;
