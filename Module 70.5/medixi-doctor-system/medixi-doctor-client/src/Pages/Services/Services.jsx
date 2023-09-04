import React, { useEffect, useState } from "react";
import "./Services.css";
import DoctorCard from "./DoctorCard/DoctorCard";

const Services = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div id="services" className="my-40 ">
      <div className="text-center">
        <p className="text-[var(--secondary-color)] subtitle text-3xl font-semibold">
          Medical & General Care
        </p>
        <h1 className="text-6xl text-[var(--primary-color)] mt-4 mb-6 font-bold">
          Our Services
        </h1>
        <p className="text-gray-400 w-[55%] mx-auto mb-10">
          Proactively revolutionize granular customer service after pandemic
          internal or organic sources istinctively impact proactive human
        </p>
      </div>

      {/* docotors */}
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-7">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Services;
