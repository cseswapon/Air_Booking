import React from "react";
import { useNavigate } from "react-router-dom";
import useCountProvider from "../../../../../hooks/useCoutProvider";
import { useDispatch, useSelector } from "react-redux";
import {
  destinationEndDate,
  destinationFrom,
  destinationStartDate,
  destinationTo,
} from "../../../../../redux/features/roundTrip/roundTripSlice";

const RoundTrip = () => {
  const { adult, infant, child, sitClass } = useCountProvider();
  const data = useSelector((data) => data.roundTrip);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    /*  navigate(
      `/flights/search?from=${data.destinationFrom}&to=${data.destinationTo}&&startingDate=${data.date}&endingDate=${data.EndDate}&adult=${adult}&children=${child}&infant=${infant}&sitClass=${sitClass}&flightType=${data.source}`
    ); */
  };
  return (
    <div>
      <form onSubmit={handelSubmit} className="flex items-center space-x-5">
        <input
          onChange={(e) => dispatch(destinationTo(e.target.value))}
          required={true}
          type="text"
          className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
          placeholder="City Name"
        />
        <input
          onChange={(e) => dispatch(destinationFrom(e.target.value))}
          required={true}
          type="text"
          className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
          placeholder="City Name"
        />
        <input
          onChange={(e) => dispatch(destinationStartDate(e.target.value))}
          type="date"
          required={true}
          className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
          placeholder="Start Date"
        />
        <input
          onChange={(e) => dispatch(destinationEndDate(e.target.value))}
          type="date"
          required={true}
          className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
          placeholder="Return Date"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default RoundTrip;
