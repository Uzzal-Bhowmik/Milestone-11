import React from "react";
import "./RegEventCard.css";

const RegEventCard = ({ regEvent, handleCancelReg }) => {
  const { _id, img, title, name, date } = regEvent;

  return (
    <div className="card card-side bg-base-100 shadow-xl md:h-[219px] flex-col md:flex-row">
      <figure className="md:w-[35%] p-4 md:p-0">
        <img src={img} alt="event" loading="lazy" />
      </figure>

      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <p className="text-gray-500">Volunteer: {name}</p>
        <p className="text-gray-500">Date: {date}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleCancelReg(_id)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegEventCard;
