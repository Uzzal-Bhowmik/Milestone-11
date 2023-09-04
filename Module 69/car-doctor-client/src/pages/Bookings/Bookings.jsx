import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/ContextAuth";
import checkoutBg from "../../assets/images/checkout/checkout.png";
import BookingTableRow from "./BookingTableRow/BookingTableRow";

const Bookings = () => {
  const { user } = useContext(AuthContext);

  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookingData(data);
      });
  }, []);

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
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => (
              <BookingTableRow key={booking._id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
