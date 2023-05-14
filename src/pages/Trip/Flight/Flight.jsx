import React, { useState } from "react";
import OneWay from "./FlightType/OneWay/OneWay";
import RoundTrip from "./FlightType/RoundTrip/RoundTrip";
import MultiCity from "./FlightType/MultiCity/MultiCity";
const Flight = () => {
  const [state, setState] = useState({
    oneWay: true,
    roundTrip: false,
    multiCity: false,
  });
  const { oneWay, roundTrip, multiCity } = state;
  return (
    <>
      <div className="flex items-center">
        <button
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
    </>
  );
};

export default Flight;
