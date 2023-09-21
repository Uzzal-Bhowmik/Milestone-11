import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/ContextAuth";
import checkoutBg from "../../assets/images/checkout/checkout.png";
import BookingTableRow from "./BookingTableRow/BookingTableRow";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    fetch(
      `https://car-doctor-server-coral-eta.vercel.app/bookings?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem(
            "car-doctor-access-token"
          )}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookingData(data);
        } else {
          logOut()
            .then(() => {
              navigate("/");
            })
            .catch((err) => console.error(err));
        }
      });
  }, []);

  const handleDelete = (_id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`https://car-doctor-server-coral-eta.vercel.app/bookings/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const rest = bookingData.filter((booking) => booking._id !== _id);
            setBookingData(rest);
            alert("Data deleted successfully");
          }
        });
    }
  };

  const handleConfirmBooking = (_id) => {
    fetch(`https://car-doctor-server-coral-eta.vercel.app/bookings/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const rest = bookingData.filter((booking) => booking._id !== _id);
          const updatedBooking = bookingData.find(
            (booking) => booking._id === _id
          );
          updatedBooking.status = "confirm";

          setBookingData([...rest, updatedBooking]);
        }
      });
  };

  return (
    <div className="mb-20">
      <div
        className="container h-[280px] rounded-3xl flex items-center ps-24 mt-8 mb-20"
        style={{
          backgroundImage: `url(${checkoutBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h4 className="text-5xl font-extrabold text-white">
          Manage All Bookings
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => (
              <BookingTableRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirmBooking={handleConfirmBooking}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
