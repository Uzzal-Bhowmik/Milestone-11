import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const { name, field, details, image } = doctor;
  return (
    <div className="card border border-2 shadow-md transition ease-in-out duration-500 hover:shadow-xl ">
      <figure>
        <img src={image} alt="doctor image" />
      </figure>
      <div className="card-body">
        <div className="badge badge-secondary px-4 py-3 font-bold text-white">
          {field}
        </div>
        <h2 className="card-title text-[var(--primary-color)] font-bold text-3xl mt-2">
          {name}
        </h2>
        <p className="text-gray-400 mt-1 mb-4">{details}</p>

        {/* buttons */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="space-x-2">
            <button className="btn btn-circle btn-outline btn-sm border-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#27467c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </button>

            {/* ------ */}

            <button className="btn btn-circle btn-outline btn-sm border-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#27467c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </button>
          </div>
          {/* ---- */}
          <div>
            <Link className="text-[#27467c] font-bold">
              Read More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#27467c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
