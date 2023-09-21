import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const TeamCard = ({ singleTeam }) => {
  const { name, designation, img } = singleTeam;

  return (
    <div className="card w-96 border border-2">
      <figure className="px-4 pt-4">
        <img
          src={img}
          alt="team member"
          className="rounded-xl border border-2"
        />
      </figure>
      <div className="card-body items-center text-center space-y-3">
        <h2 className="card-title font-bold text-3xl">{name}</h2>
        <p className="font-bold text-xl text-gray-400">{designation}</p>
        <div className="card-actions flex">
          {/* --------------- */}
          <button className="btn btn-circle">
            <FcGoogle className="h-6 w-6" />
          </button>
          {/* --------- */}
          <button className="btn btn-circle">
            <BsFacebook className="h-6 w-6 text-blue-600" />
          </button>
          {/* ------- */}
          <button className="btn btn-circle">
            <AiFillTwitterCircle className="h-7 w-7 text-blue-400" />
          </button>
          {/* ---------- */}
          <button className="btn btn-circle">
            <BsInstagram className="h-6 w-6 text-orange-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
