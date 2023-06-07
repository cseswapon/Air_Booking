import React, { createContext, useEffect, useRef, useState } from "react";
import withDashboard from "../shared/DashboardLayout/DashboardLayout";
import Flight from "../Trip/Flight/Flight";
import flights from "../../assets/icon/home/Flights.svg";
import { FaUserAlt } from "react-icons/fa";
import linebar from "../../assets/icon/linebar.svg";
import "./Home.css";
export const CREATECONTEXT = createContext();
const Home = () => {
  const [tost, setTost] = useState(false);
  const [state, setState] = useState({
    flight: true,
    adult: 1,
    infant: 0,
    child: 0,
    sitClass: "Economy",
  });
  const toast = useRef();
  // console.log(state);
  const { flight, adult, infant, child, sitClass } = state;

  useEffect(() => {
    let handler = (e) => {
      if (!toast.current?.contains(e.target)) {
        // alert('hello')
        setTost(false);
        // console.log(menuRef.current.contains(e.target));
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);



  return (
    <div className="p-[2rem]">
      {/* some text with a header section */}
      <div className="my-10 flex items-center space-x-3">
        <h1 className="font-semibold text-2xl">Start Your Trip Now </h1>
        <img draggable={false} className="h-1" src={linebar} alt="avatar" />
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
        <div className="mx-10 relative">
          <button onClick={() => setTost(true)}>
            <FaUserAlt className="text-2xl" /> <strong>Adult</strong> {adult}{" "}
            <strong>Infant</strong> {infant} <strong>Children</strong> {child}{" "}
            <strong>{sitClass}</strong>
          </button>
          {tost && (
            <div
              ref={toast}
              className="absolute bg-white p-3 shadow-sm border rounded"
            >
              <div className="flex items-center justify-between">
                <button
                  disabled={adult <= 1 ? true : false}
                  onClick={() => setState({ ...state, adult: adult - 1 })}
                  className={`px-2 border bg-red-500 text-white rounded ${
                    adult <= 1 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  -
                </button>
                <span className="mx-5">{adult}</span>
                <button
                  disabled={adult >= 9 ? true : false}
                  onClick={() => setState({ ...state, adult: adult + 1 })}
                  className={`px-2 border bg-blue-500 text-white rounded ${
                    adult >= 9 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  +
                </button>
              </div>
              <div className="flex items-center my-2 justify-between">
                <button
                  disabled={infant <= 0 ? true : false}
                  onClick={() => setState({ ...state, infant: adult - 1 })}
                  className={`px-2 border bg-red-500 text-white rounded ${
                    infant <= 0 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  -
                </button>
                <span className="mx-5">{infant}</span>
                <button
                  disabled={infant >= 4 ? true : false}
                  onClick={() => setState({ ...state, infant: infant + 1 })}
                  className={`px-2 border bg-blue-500 text-white rounded ${
                    infant >= 4 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  +
                </button>
              </div>
              <div className="flex items-center justify-between">
                <button
                  disabled={child <= 0 ? true : false}
                  onClick={() => setState({ ...state, child: adult - 1 })}
                  className={`px-2 border bg-red-500 text-white rounded ${
                    child <= 0 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  -
                </button>
                <span className="mx-5">{child}</span>
                <button
                  disabled={child >= 4 ? true : false}
                  onClick={() => setState({ ...state, child: child + 1 })}
                  className={`px-2 border bg-blue-500 text-white rounded ${
                    child >= 4 ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  +
                </button>
              </div>
              <select
                onChange={(e) =>
                  setState({ ...state, sitClass: e.target.value })
                }
                className="my-2 focus:outline-0"
                value={state.sitClass}
              >
                <option value="">---Select Class---</option>
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
              </select>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setTost(false)}
                  className="bg-blue-500 px-2 py-1 rounded-sm text-white"
                >
                  Done
                </button>
                <button
                  onClick={() =>
                    setState({
                      ...state,
                      adult: 1,
                      infant: 0,
                      child: 0,
                      sitClass: "Economy",
                    })
                  }
                  className="bg-red-500 px-2 py-1 rounded-sm text-white"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* flight component */}
      {flight && (
        <CREATECONTEXT.Provider value={state}>
          <Flight />
        </CREATECONTEXT.Provider>
      )}
    </div>
  );
};

export default withDashboard(Home);
