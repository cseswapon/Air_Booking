import React from "react";
import { useParams } from "react-router-dom";
import withDashboard from "../../shared/DashboardLayout/DashboardLayout";

const FlightBooking = () => {
  const { id, bookingId } = useParams();
  console.log(id, bookingId);
  return (
    <div className="p-5">
      <h1>Booking</h1>
    </div>
  );
};

export default withDashboard(FlightBooking);
