import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  destinationDate,
  destinationFrom,
  destinationTo,
} from "../../../../../redux/features/oneWay/oneWaySlice";
import { useNavigate } from "react-router-dom";
import useCountProvider from "../../../../../hooks/useCoutProvider";

const OneWay = () => {
  const { adult, infant, child, sitClass } = useCountProvider();
  const data = useSelector((data) => data.oneway);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/flights/search?from=${data.destinationFrom}&to=${data.destinationTo}&&date=${data.date}&adult=${adult}&children=${child}&infant=${infant}&sitClass=${sitClass}&flightType=${data.source}`
    );
  };

  // console.log(data);
  return (
    <>
      <div className="container mx-auto mt-5">
        <form
          onSubmit={(e) => handelSubmit(e)}
          className="flex items-center space-x-5"
        >
          <input
            required={true}
            onChange={(e) => dispatch(destinationTo(e.target.value))}
            type="text"
            className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="City Name"
          />
          <input
            required={true}
            onChange={(e) => dispatch(destinationFrom(e.target.value))}
            type="text"
            className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="City Name"
          />
          <input
            required={true}
            onChange={(e) => dispatch(destinationDate(e.target.value))}
            type="date"
            className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="Date"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default OneWay;
