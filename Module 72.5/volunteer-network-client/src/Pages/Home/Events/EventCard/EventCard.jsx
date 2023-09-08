import React, { useEffect, useState } from "react";
import "./EventCard.css";

const EventCard = ({ event }) => {
  const { title, img } = event;

  // event card bg colors
  const eventsBg = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"];
  const randomBg = eventsBg[Math.floor(Math.random() * eventsBg.length)];

  return (
    <div className="w-[270px] h-[320px] event-card">
      <img src={img} alt="" className="w-full h-[90%]" loading="lazy" />
      <div
        className="event-title flex items-center justify-center"
        style={{ backgroundColor: randomBg }}
      >
        <p className="text-white font-bold text-lg">{title}</p>
      </div>
    </div>
  );
};

export default EventCard;
