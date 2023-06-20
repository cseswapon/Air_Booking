import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useCookies from "../hooks/useCookies";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const role = useSelector((state) => state.login.role);

  let useCooke = useCookies("user_login");
  if (useCooke === null) {
    return (
      localStorage.clear(),
      (<Navigate to="/login" state={{ from: location }} />)
    );
  }
  const userLogIn = JSON.parse(localStorage.getItem("login"))?.userLogIn;
  if (!userLogIn) {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const name = cookie.trim().split("=")[0];
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
  } else if (userLogIn && useCooke && role === "admin") {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
};

export default AdminRoute;
