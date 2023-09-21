import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/ContextAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  const location = useLocation();

  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg mx-auto block h-screen text-error"></span>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
