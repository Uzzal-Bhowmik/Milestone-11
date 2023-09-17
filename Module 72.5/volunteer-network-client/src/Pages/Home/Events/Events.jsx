import React, { useEffect, useState } from "react";
import "./Events.css";
import EventCard from "./EventCard/EventCard";
import { Link } from "react-router-dom";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://volunteer-network-server-ppid.onrender.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div className="mt-14">
      <h1 className="text-4xl font-bold text-center">
        I GROW BY HELPING PEOPLE IN NEED.
      </h1>

      <div className="flex justify-center pt-8 pb-16">
        <div className="join md:w-1/3">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Search..."
          />
          <button className="btn btn-primary join-item">Search</button>
        </div>
      </div>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-7 mt-10 md:mt-0">
        {events.map((event) => (
          <Link
            key={event._id}
            to={`/events/${event._id}`}
            className="w-fit mx-auto"
          >
            <EventCard event={event} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
