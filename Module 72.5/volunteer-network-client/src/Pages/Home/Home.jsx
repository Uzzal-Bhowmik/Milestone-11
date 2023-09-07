import React from "react";
import homeBanner from "../../assets/home-banner.png";
import "./Home.css";
import Events from "./Events/Events";

const Home = () => {
  return (
    <div className="home">
      {/* banner */}
      <div className="home-banner">
        <img src={homeBanner} alt="" />
        <div className="overlay"></div>
      </div>

      {/* events */}
      <Events />
    </div>
  );
};

export default Home;
