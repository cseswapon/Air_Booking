import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = {
    // email: "swaponsaha@gmail.com",
  };
  const location = useLocation();
  if (user?.email) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default PublicRoute;
