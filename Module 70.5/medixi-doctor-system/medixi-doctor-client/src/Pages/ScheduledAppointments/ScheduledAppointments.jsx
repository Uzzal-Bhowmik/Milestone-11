import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const ScheduledAppointments = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/appointments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  console.log(appointments);

  return (
    <div>
      <p>these are your appointments: {appointments.length}</p>
    </div>
  );
};

export default ScheduledAppointments;
