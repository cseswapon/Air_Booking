import React, { useState } from "react";
import OneWay from "./FlightType/OneWay/OneWay";
import RoundTrip from "./FlightType/RoundTrip/RoundTrip";
import MultiCity from "./FlightType/MultiCity/MultiCity";
import { Outlet } from "react-router-dom";
const Flight = () => {
  const [state, setState] = useState({
    oneWay: true,
    roundTrip: false,
    multiCity: false,
  });
  const { oneWay, roundTrip, multiCity } = state;
  // console.log(oneWay,roundTrip,multiCity);
  return (
    <>
      <div className="flex items-center space-x-5 my-5">
        <button
          className={`border-spacing-y-2 ${
            oneWay ? "border-blue-950 border-b-2" : "border-white border-b-2"
          } pb-2`}
          onClick={() =>
            setState({
              ...state,
              oneWay: true,
              roundTrip: false,
              multiCity: false,
            })
          }
        >
          One Way
        </button>
        <button
          className={`border-spacing-y-2 ${
            roundTrip ? "border-blue-950 border-b-2" : "border-white border-b-2"
          } pb-2`}
          onClick={() =>
            setState({
              ...state,
              oneWay: false,
              roundTrip: true,
              multiCity: false,
            })
          }
        >
          Round Trip
        </button>
        <button
          className={`border-spacing-y-2 ${
            multiCity ? "border-blue-950 border-b-2" : "border-white border-b-2"
          } pb-2`}
          onClick={() =>
            setState({
              ...state,
              oneWay: false,
              roundTrip: false,
              multiCity: true,
            })
          }
        >
          Multi City
        </button>
      </div>
      {/* oneWay */}
      {oneWay && <OneWay />}
      {/* roundTrip */}
      {roundTrip && <RoundTrip />}
      {/* multiCity */}
      {multiCity && <MultiCity />}
      <Outlet />
    </>
  );
};

export default Flight;
