import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  const location = useLocation();

  if (isLoading) {
    return (
      <span className="loading loading-infinity w-[4rem] mx-auto mt-16 block text-red-500"></span>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;
