import React, { useState } from "react";
import withDashboard from "../shared/DashboardLayout/DashboardLayout";
import Flight from "../Trip/Flight/Flight";
import Hotel from "../Trip/Hotel/Hotel";
import flights from "../../assets/icon/home/Flights.svg";
import hotels from "../../assets/icon/home/Hotel.svg";
import { FaUserAlt } from "react-icons/fa";

const Home = () => {
  const [state, setState] = useState({
    flight: true,
    hotel: false,
  });
  // console.log(state);
  const { flight, hotel } = state;
  return (
    <>
      {/* some text with a header section */}
      <div>
        <h1>Start Your Trip Now</h1>
      </div>
      {/* trip type */}
      <div className="flex items-center">
        <div
          onClick={() => setState({ ...state, flight: true, hotel: false })}
          className="flex flex-col items-center"
        >
          <img src={flights} alt="avatar" />
          <p>Flight</p>
        </div>
        <div
          onClick={() => setState({ ...state, hotel: true, flight: false })}
          className="flex flex-col items-center"
        >
          <img src={hotels} alt="avatar" />
          <p>Hotel</p>
        </div>
        <div>
          <button onClick={()=>alert('hello world')}>
            <FaUserAlt /> 1 Economy
          </button>
        </div>
      </div>
      {/* flight component */}
      {flight && <Flight />}
      {/* hotel component */}
      {hotel && <Hotel />}
    </>
  );
};

export default withDashboard(Home);
