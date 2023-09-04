import React, { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import appointBanner from "../../assets/appoint-banner.jpg";
import "./Appointment.css";
import { AuthContext } from "../../context/AuthProvider";

const Appointment = () => {
  const doctor = useLoaderData();
  console.log(doctor);

  const { user } = useContext(AuthContext);
  const { field, name, serviceFee, image } = doctor;

  const handleAppointment = (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const date = form.date.value;

    const appointment = {
      userName,
      date,
      doctorName: name,
      field,
      serviceFee,
      image,
    };

    fetch("http://localhost:5000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      {/* banner */}

      <div
        className="home-banner text-white relative min-h-[70vh] appoint-banner mb-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${appointBanner})`,
        }}
      >
        <div className="w-3/5 absolute top-1/4 left-60">
          <h1 className="text-5xl leading-[4.20rem] font-bold">
            <span className="text-[var(--secondary-color)]">
              Make an Appointment
            </span>{" "}
            and discuss with the best doctors
          </h1>
          <p className="font-semibold text-gray-200 text-sm mt-2 mb-10">
            Conveniently drive go forward architectures with future-proof growth
            strategies. Energistically supply low-risk high-yield process
            improvements for mission-critical testing procedures and visual
            mockups.
          </p>
        </div>

        <div className="border container shadow-2xl flex justify-around items-center bg-white text-black py-10 absolute -bottom-16 left-20">
          <div>
            <p className="font-bold text-gray-400">Discuss On</p>
            <h3 className="text-2xl font-bold mt-1">{field}</h3>
          </div>

          <div>
            <p className="font-bold text-gray-400">Service Fee</p>
            <h3 className="text-2xl font-bold mt-1">{serviceFee}</h3>
          </div>

          <div>
            <p className="font-bold text-gray-400">Doctor</p>
            <h3 className="text-2xl font-bold mt-1">{name}</h3>
          </div>
        </div>
      </div>

      {/* appointment form */}
      <div className="w-95% md:w-[75%] mx-auto border border-3 border-blue-300 mb-20">
        {/* right header */}
        <div className="bg-[#27467c] flex justify-between items-center text-white p-10">
          <div>
            <h4 className="text-4xl font-bold">Book an Appointment</h4>
            <p className="text-gray-200 mt-3 text-sm">
              Please call us or send us an email to ensure.
            </p>
          </div>
          <div className="bg-[#18cfed] p-4 rounded-full hover:bg-black cursor-pointer transition-all ease duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
        </div>

        {/* right side form */}
        <form className="form" onSubmit={handleAppointment}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-12">
            <input
              type="text"
              defaultValue={field}
              disabled
              className="w-full"
            />

            <input
              type="text"
              defaultValue={name}
              disabled
              className="w-full"
            />

            <input
              type="text"
              name="userName"
              placeholder="Enter Your Name"
              required
              className="w-full"
            />

            <input
              type="email"
              defaultValue={user?.email}
              className="w-full"
              disabled
            />

            <input
              type="text"
              name="userPhone"
              placeholder="Your Phone"
              className="w-full"
            />

            <input type="datetime-local" name="date" className="w-full" />
          </div>

          <button
            className="btn btn-block btn-info font-bold rounded-none"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
