import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg block mx-auto mt-24"></span>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
