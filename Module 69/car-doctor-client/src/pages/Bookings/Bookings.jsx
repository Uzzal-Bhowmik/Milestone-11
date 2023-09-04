import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/ContextAuth";

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

  console.log(bookingData);

  return (
    <div>
      <p>these are all the bookings</p>
    </div>
  );
};

export default Bookings;
