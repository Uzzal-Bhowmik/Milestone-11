import React from "react";
import "./EventRegister.css";
import { useLoaderData } from "react-router-dom";

const EventRegister = () => {
  const event = useLoaderData();

  console.log(event);

  return (
    <div className="flex justify-center items-center my-10">
      <form className="w-[90%] md:w-[40%] py-9 px-14 event-reg-form">
        <h4 className="text-2xl font-extrabold mb-8">
          Register as a Volunteer
        </h4>

        <input type="text" name="name" placeholder="Full Name" required />
        <br />
        <input type="email" name="email" placeholder="Email" />
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
        <button className="btn btn-primary btn-block rounded-none">
          Registration
        </button>
      </form>
    </div>
  );
};

export default EventRegister;
