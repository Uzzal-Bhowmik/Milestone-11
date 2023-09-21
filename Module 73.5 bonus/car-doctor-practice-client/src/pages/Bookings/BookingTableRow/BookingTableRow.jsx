import React from "react";

const BookingTableRow = ({ booking, handleDelete, handleConfirmBooking }) => {
  const { _id, name, title, price, img, email, status } = booking;

  return (
    <tr>
      <th>
        <label>
          <button
            className="btn btn-circle btn-sm"
            onClick={() => handleDelete(_id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-16">
              <img src={img} alt="customer profile" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-success font-bold">Confirmed</span>
        ) : (
          <button
            className="btn btn-ghost btn-xs"
            onClick={() => handleConfirmBooking(_id)}
          >
            Confirm Booking
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingTableRow;
