import React from "react";

const AppointTableRow = ({
  appointment,
  handleDeleteAppointment,
  handleConfirmAppointment,
  index,
}) => {
  const { _id, doctorName, image, field, serviceFee, date, userName, status } =
    appointment;

  return (
    <tr>
      <th className="btn btn-circle mt-2">{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="doctor profile" />
            </div>
          </div>
          <div>
            <div className="font-bold">{doctorName}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>

      <td>
        <span className="badge badge-info badge-md px-5 py-3 text-white">
          {field}
        </span>
      </td>

      <td className="font-semibold">{userName}</td>

      <td>
        {date.split("T")[0]} : {date.split("T")[1]}
      </td>

      <td>$ {serviceFee}</td>

      <th>
        {status === "confirmed" ? (
          <span className="badge badge-success badge-md px-5 py-3 text-white">
            Confirmed
          </span>
        ) : (
          <button
            className="btn btn-xs border rounded-full font-semibold px-4"
            onClick={() => handleConfirmAppointment(_id)}
          >
            Confirm
          </button>
        )}
      </th>

      <th>
        <label>
          <button
            className="btn btn-circle btn-sm hover:bg-error"
            onClick={() => handleDeleteAppointment(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#000"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
    </tr>
  );
};

export default AppointTableRow;
