import React, { useContext, useEffect, useState } from "react";
import "./RegisteredEvents.css";
import { AuthContext } from "../../../context/AuthProvider";
import RegEventCard from "./RegEventCard/RegEventCard";
import Swal from "sweetalert2";

const RegisteredEvents = () => {
  const [regEvents, setRegEvents] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/registeredEvents?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRegEvents(data);
        setIsLoading(false);
      });
  }, [user?.email, isDeleted]);

  // delete / cancel registered event
  const handleCancelReg = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your registration for this event will be cancelled!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/registeredEvents/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your registration has been cancelled 😥.",
                "success"
              );
              setIsDeleted(!isDeleted);
            }
          });
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <span className="loading loading-infinity text-red-500 text-6xl mx-auto block mt-16 w-[4.5rem]"></span>
      ) : (
        <>
          {regEvents.length !== 0 ? (
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 my-14">
              {regEvents.map((regEvent) => (
                <RegEventCard
                  key={regEvent._id}
                  regEvent={regEvent}
                  handleCancelReg={handleCancelReg}
                />
              ))}
            </div>
          ) : (
            <div>
              <h1 className="text-5xl text-red-500 text-center mt-16">
                No Registered Event Found. 🥺
              </h1>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default RegisteredEvents;
