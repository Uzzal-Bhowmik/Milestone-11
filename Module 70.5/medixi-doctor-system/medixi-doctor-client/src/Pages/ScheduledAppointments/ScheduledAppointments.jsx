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
              <th>Doctor Details</th>
              <th>Specialist</th>
              <th>Date</th>
              <th>Service Fee</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                appointments.map(appointment => )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduledAppointments;
