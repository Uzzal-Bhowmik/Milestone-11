import React, { useContext } from "react";
import "./EventRegister.css";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";

const EventRegister = () => {
  const event = useLoaderData();
  const { _id, img, title } = event;
  const { user } = useContext(AuthContext);

  const handleEventRegister = (e) => {
    e.preventDefault();

    const date = e.target.date.value;
    const name = e.target.name.value;
    const regEvent = { img, title, name, date, email: user?.email };

    fetch(
      "https://volunteer-network-server-ppid.onrender.com/registeredEvents",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regEvent),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Event Registration Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center my-10">
      <form
        className="w-[90%] md:w-[40%] py-9 px-14 event-reg-form"
        onSubmit={handleEventRegister}
      >
        <h4 className="text-2xl font-extrabold mb-8">
          Register as a Volunteer
        </h4>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          defaultValue={user?.displayName && user.displayName}
          required
        />
        <br />
        <input type="email" defaultValue={user?.email} disabled />
        <br />
        <input type="date" name="date" placeholder="Date" required />
        <br />
        <textarea
          name="desc"
          rows={3}
          placeholder="Tell us what are your motivation? [Optional]"
        />
        <br />
        <input type="text" defaultValue={"Event: " + event?.title} disabled />
        <br />
        <button
          type="submit"
          className="btn btn-primary btn-block rounded-none"
        >
          Registration
        </button>
      </form>
    </div>
  );
};

export default EventRegister;
