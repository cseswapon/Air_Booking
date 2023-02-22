import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = {
    // email: "swaponsaha@gmail.com",
  };

  // ----------------> use to custom hook <----------------

  // if (isLoading) {
  //   return (
  //     <div className="login-from">
  //       <div className="spinner-border text-danger" role="status">
  //         <span className="visually-hidden">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  // ----------------> if user login navigate other pages <----------------

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
