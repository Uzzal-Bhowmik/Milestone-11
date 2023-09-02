import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard/TeamCard";
import Slider from "react-slick";
import "../Team/TeamCard/TeamCard.css";
import { BsArrowLeft } from "react-icons/bs";

const Team = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  // react slick slider settings

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-16">
      <div className="text-center space-y-5 mb-10">
        <h4 className="text-red-500 font-semibold text-2xl">Team</h4>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p className="text-[#737373] md:w-2/4 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <Slider {...settings}>
        {team.map((singleTeam) => (
          <TeamCard key={singleTeam.img} singleTeam={singleTeam} />
        ))}
      </Slider>
    </div>
  );
};

export default Team;
