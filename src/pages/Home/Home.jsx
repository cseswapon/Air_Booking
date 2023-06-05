import React, { useState } from "react";
import withDashboard from "../shared/DashboardLayout/DashboardLayout";
import Flight from "../Trip/Flight/Flight";
import flights from "../../assets/icon/home/Flights.svg";
import { FaUserAlt } from "react-icons/fa";
import './Home.css';
const Home = () => {
  const [state, setState] = useState({
    flight: true,
  });
  // console.log(state);
  const { flight } = state;
  return (
    <div className="p-[2rem]">
      {/* some text with a header section */}
      <div className="my-10">
        <h1 className="font-semibold text-2xl">
          Start Your Trip Now
        </h1>
      </div>
      {/* trip type */}
      <div className="flex items-center">
        <div
          onClick={() => setState({ ...state, flight: true, hotel: false })}
          className="flex flex-col items-center cursor-pointer"
        >
          <img src={flights} alt="avatar" />
          <p>Flight</p>
        </div>
        <div className="mx-10">
          <button onClick={() => alert("hello world")}>
            <FaUserAlt /> 1 Economy
          </button>
        </div>
      </div>
      {/* flight component */}
      {flight && <Flight />}
    </div>
  );
};

export default withDashboard(Home);
