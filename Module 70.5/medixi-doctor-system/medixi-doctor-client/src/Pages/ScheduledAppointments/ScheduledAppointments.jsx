import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import AppointTableRow from "./AppointTableRow/AppointTableRow";

const ScheduledAppointments = () => {
  const { user } = useContext(AuthContext);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/appointments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  // delete appointment
  const handleDeleteAppointment = (_id) => {
    if (confirm("Are you sure to remove this appointment?")) {
      fetch(`http://localhost:5000/appointments/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Appointment Deleted Successfully!");

            const rest = appointments.filter((appoint) => appoint._id !== _id);
            setAppointments(rest);
          }
        });
    }
  };

  // confirm appointment
  const handleConfirmAppointment = (_id) => {
    fetch(`http://localhost:5000/appointments/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const rest = appointments.filter((appoint) => appoint._id !== _id);
          const confirmedAppointment = appointments.find(
            (appoint) => appoint._id === _id
          );

          const newConfirmed = { ...confirmedAppointment, status: "confirmed" };

          setAppointments([newConfirmed, ...rest]);
        }
      });
  };

  console.log(appointments);

  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-gray-100 container my-14 p-4">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Doctor Details</th>
              <th>Specialist</th>
              <th>Appointment For</th>
              <th>Date</th>
              <th>Service Fee</th>
              <th>Confirm</th>
              <th>
                <label>
                  Remove <br /> Appointment
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {appointments.map((appointment, idx) => (
              <AppointTableRow
                key={appointment._id}
                appointment={appointment}
                handleDeleteAppointment={handleDeleteAppointment}
                handleConfirmAppointment={handleConfirmAppointment}
                index={idx}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduledAppointments;
