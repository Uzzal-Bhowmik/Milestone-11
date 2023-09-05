import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-coral-eta.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-28">
      <div className="text-center space-y-5">
        <h5 className="font-semibold text-red-500 text-2xl">Services</h5>
        <h2 className="text-6xl font-bold">Our Service Area</h2>
        <p className="text-[#737373] md:w-2/4 mx-auto">
          The majority have suffered alteration in some form, by injected
          humour, or randomized words which dont look even slightly believable.
        </p>
      </div>

      <div className="mt-7 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>

      <button className="btn btn-outline btn-error mx-auto block">
        More Services
      </button>
    </div>
  );
};

export default Services;
