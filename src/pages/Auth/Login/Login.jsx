import React from "react";
import flight from "../../../assets/icon/Flights.svg";
import hotel from "../../../assets/icon/Hotel.svg";
import rail from "../../../assets/icon/Rail.svg";
import tour from "../../../assets/icon/Tour.svg";
import activity from "../../../assets/icon/Activity.svg";
import visa from "../../../assets/icon/Visa.svg";
import tbpLogo from "../../../assets/icon/logo/tbp_logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "../css/Login.css";
import { Link } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmail,
  createPassword,
} from "../../../redux/features/login/loginSlice";
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
  const dispatch = useDispatch();
  const {
    login: { email, password },
  } = useSelector((state) => state);
  return (
    <div className="lg:bg-slate-700 bg-slate-100 min-h-screen lg:flex items-center justify-center relative">
      <div className="lg:flex items-center w-3/4 bg-slate-100 rounded absolute lg:static right-2/4 top_down lg:right-4/4 translate-x-1/2 lg:translate-x-0	translate-y-1/2 lg:translate-y-0">
        {/* login part */}
        <div className="lg:w-1/2 lg:p-11">
          <h1 className="text-center font-bold text-3xl lg:my-3">Login</h1>
          <form>
            <input
              className="w-full my-2 p-3 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
              placeholder="Email Address"
              type="email"
              defaultValue={email}
              onChange={(e) => dispatch(createEmail(e.target.value))}
            />
            <br />
            <input
              className="w-full my-2 p-3 bg-white drop-shadow-sm focus:outline-none border-0 rounded"
              placeholder="Password"
              type="password"
              defaultValue={password}
              onChange={(e) => dispatch(createPassword(e.target.value))}
            />
            <div className="text-center my-2">
              <button
                type="button"
                className="w-1/4 bg-blue-900 p-1 text-white rounded hover:text-white hover:bg-sky-500 transition ease-in-out delay-150 hover:duration-300"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center">
            Don't have account ?{" "}
            <span className="font-bold text-red-400 cursor-pointer">
              <Link to="/register">Join Us</Link>
            </span>
          </p>
        </div>
        {/* login intro part */}
        <div className="w-1/2 p-11 lg:flex hidden flex-col relative bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-r">
          <div className="my-3">
            <p className="text-end">
              Don't have an account !!!{" "}
              <span className="border-2 p-2 text-yellow-400 rounded cursor-pointer">
                <Link to="/register">Register Now</Link>
              </span>
            </p>
          </div>
          <div className="my-3">
            <h1 className="my-2 font-bold text-3xl">
              {" "}
              Welcome to <br />
              Travel Business Portal
            </h1>
            <p className="my-4 text-yellow-400 after_line">
              Get The Best Deal at
            </p>
            <div className="flex my-2">
              {bestDeal.map((deal, i) => (
                <div className="flex flex-col items-center mr-5" key={i}>
                  <img
                    draggable={false}
                    className="w-10/12"
                    src={deal.flag}
                    alt="avatar"
                  />
                  <p>{deal.name}</p>
                </div>
              ))}
            </div>
            <p className="my-4">
              We have over 3500+ Customers joined us, <br /> now it's your turn.
            </p>
            <p className="mt-3 mb-1 text-yellow-400 after_line">Reservation</p>
            <div className="flex items-center">
              <BsFillTelephoneFill />
              <a className="ml-2" href="tel:+8801844656565">
                +8801844656565, +88 02-55048277(24x7)
              </a>
            </div>
            <div className="flex items-center">
              <MdEmail />
              <p className="ml-2">tbp@aotrek.com</p>
            </div>
          </div>
          <div className="absolute w-1/4 bottom-0 right-0">
            <img src={tbpLogo} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
