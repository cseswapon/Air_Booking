import React from "react";
import withDashboard from "../../shared/DashboardLayout/DashboardLayout";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetSingleFlightQuery } from "../../../redux/features/api/apiSlice";
import time from "./assest/timeimg.svg";
import { useSelector } from "react-redux";

const TicketBooking = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("login")).token;
  const { data } = useGetSingleFlightQuery(id, token);
  const [params, setSearchParams] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  if (!(from || to)) {
    setSearchParams({ from: "" });
    setSearchParams({ to: "" });
  }

  const state = useSelector((state) => state.sitBooking.booking);
  console.log(state.sitBooking);

  return (
    <>
      <h1 className="p-5 font-bold">Ticketing Booking Id : {id}</h1>
      <div className="grid grid-cols-2 px-5">
        <div>
          <h1>Passenger Info</h1>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold border-b-2 pb-2">Ticket Info</h1>
          <div>
            <img
              className="w-1/4 mx-auto"
              src={data?.allFlight.flag}
              alt="avatar"
            />
            <div className="flex justify-around items-center px-4 my-2">
              <div className="text-2xl font-bold">{from.toUpperCase()}</div>
              <img className="w-2/6" src={time} alt="avatar" />
              <div className="text-2xl font-bold">{to.toUpperCase()}</div>
            </div>
            <h1 className="text-center text-3xl text-blue-500 font-bold my-3 py-3">
              {data?.allFlight.name}
            </h1>
            <div className="flex justify-around items-center px-4 my-4">
              <p>Start {data?.allFlight.start}</p>
              <p>End {data?.allFlight.end}</p>
            </div>
            <div className="py-5">
              <p className="font-bold text-2xl">
                Price:{" "}
                {data?.allFlight.price}
              </p>
            </div>
            <hr />
            <div className="py-5">
              <p>
                Total Price:{" "}
                {Number(data?.allFlight.price) *
                  state.sitBooking.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withDashboard(TicketBooking);
