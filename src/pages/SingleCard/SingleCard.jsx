import React from "react";
import withDashboard from "../shared/DashboardLayout/DashboardLayout";
import { useParams } from "react-router-dom";
import { useGetSingleFlightQuery } from "../../redux/features/api/apiSlice";

const SingleCard = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("login")).token;
   const { data, error, isLoading } = useGetSingleFlightQuery(id, token);
  console.log(data);
  return (
    <div className="px-9">
      <h1>{id}</h1>
    </div>
  );
};

export default withDashboard(SingleCard);
