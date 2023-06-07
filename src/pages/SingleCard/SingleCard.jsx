import React from "react";
import withDashboard from "../shared/DashboardLayout/DashboardLayout";
import { useParams } from "react-router-dom";

const SingleCard = () => {
  const { id } = useParams();
  return (
    <div className="px-9">
      <h1>{id}</h1>
    </div>
  );
};

export default withDashboard(SingleCard);
