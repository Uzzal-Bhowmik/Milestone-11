import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/ContextAuth";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg mx-auto block h-screen text-error"></span>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoute;
