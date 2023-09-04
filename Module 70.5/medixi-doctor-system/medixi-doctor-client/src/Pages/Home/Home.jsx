import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import Services from "../Services/Services";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* Top Banner */}
      <div
        className="home-banner text-white relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="w-2/5 absolute top-1/4 left-60">
          <h1 className="text-5xl leading-[4.20rem] font-bold">
            <span className="text-[var(--primary-color)]">
              Best Medics, Doctors
            </span>{" "}
            and physicians
          </h1>
          <p className="font-semibold text-gray-200 text-sm mt-2 mb-10">
            Conveniently drive go forward architectures with future-proof growth
            strategies. Energistically supply low-risk high-yield process
            improvements for mission-critical testing procedures and visual
            mockups.
          </p>
          <HashLink smooth to="/#services" className="block">
            <button className="btn btn-wide btn-ghost rounded-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)] text-white">
              View All Services
            </button>
          </HashLink>
        </div>
      </div>

      <Services />

      <Footer />
    </div>
  );
};

export default Home;
