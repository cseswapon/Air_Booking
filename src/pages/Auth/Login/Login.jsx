import React from "react";
import flight from "../../../assets/icon/home/Flights.svg";
import hotel from "../../../assets/icon/home/Hotel.svg";
import rail from "../../../assets/icon/home/Rail.svg";
import tour from "../../../assets/icon/home/Tour.svg";
import activity from "../../../assets/icon/home/Activitys.svg";
import visa from "../../../assets/icon/home/Visa.svg";
import tbpLogo from "../../../assets/icon/logo/tbp_logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Login = () => {
  const bestDeal = [
    {
      name: "Flight",
      flag: flight,
    },
    {
      name: "Hotel",
      flag: hotel,
    },
    {
      name: "Rail",
      flag: rail,
    },
    {
      name: "Tour",
      flag: tour,
    },
    {
      name: "Activity",
      flag: activity,
    },
    {
      name: "Visa",
      flag: visa,
    },
  ];
  return (
    <div className="bg-slate-700 min-h-screen flex items-center justify-center">
      <div>
        {/* login part */}
        <div>
          <h1>LgoIn</h1>
          <form>
            <input type="email" name="" id="" />
            <br />
            <input type="password" name="" id="" />
            <br />
            <p>
              <span className="text-red-500">Forgot</span>password?
            </p>
            <button>LOGIN</button>
          </form>
          <p>
            Don't have account? <span className="font-bold"></span>
          </p>
        </div>
        {/* login intro part */}
        <div className="relative">
          <div className="absolute">
            <p>
              Don't have an account!!!{" "}
              <span className="border-2 p-2">Register Now</span>
            </p>
          </div>
          <div>
            <h1>
              {" "}
              Welcome to <br />
              Travel Business Portal
            </h1>
            <p>Get The Best Deal at</p>
            <div>
              {bestDeal.map((deal, i) => (
                <div key={i}>
                  <img src={deal.flag} alt="avatar" />
                  <p>{deal.name}</p>
                </div>
              ))}
            </div>
            <p>We have over 3500+ Customers joined us, now it's your turn.</p>
            <p>Reservation</p>
            <div>
              <BsFillTelephoneFill />
              <a href="tel:+8801844656565">
                +8801844656565, +88 02-55048277(24x7)
              </a>
            </div>
            <div>
              <MdEmail />
              <p>tbp@aotrek.com</p>
            </div>
          </div>
          <div className="absolute">
            <img src={tbpLogo} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
