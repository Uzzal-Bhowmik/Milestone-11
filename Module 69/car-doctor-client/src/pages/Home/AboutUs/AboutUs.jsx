import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-36">
      <div className="w-[90%] md:w-[45%] relative">
        <img
          src={person}
          alt=""
          className="md:w-[85%] rounded-lg h-[450px] mb-10 md:mb-0"
        />
        <img
          src={parts}
          alt=""
          className="absolute md:w-1/2 hidden md:inline md:-bottom-14 right-10 rounded-lg border-white border-8 h-[280px]"
        />
      </div>
      <div className="w-[85%] md:w-[55%] space-y-7">
        <h4 className="text-3xl font-semibold text-red-400">About Us</h4>
        <h1 className="text-6xl font-bold">
          We are qualified & of experience in this field
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <button className="btn btn-error">Get More Info</button>
      </div>
    </div>
  );
};

export default AboutUs;
