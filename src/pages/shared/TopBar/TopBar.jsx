import React from "react";
import { GrNotification } from "react-icons/gr";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
const TopBar = () => {
  const state = useSelector((state) => state.login);
  // console.log(state.email);
  return (
    <>
      <div className="flex justify-between px-9 bg-slate-100 py-3 relative z-0">
        <div className="flex items-center">
          <div className="flex items-center">
            <div>
              <p className="bg-slate-600 px-3 py-1 me-2 text-white rounded-sm">
                Phone
              </p>
            </div>
            <div>
              <p>{state.contactNumber}</p>
            </div>
          </div>
          <div className="flex items-center ms-10">
            <div>
              <p className="bg-slate-600 px-3 py-1 me-2 text-white rounded-sm">
                Email:{" "}
              </p>
            </div>
            <div>
              <a href={`mailto:${state.email}`}>
              </a>{state.email}
              <span className="text-white bg-blue-700 p-2 mx-3 rounded-lg font-bold">
                ({state.role})
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="text-3xl  text-slate-600 me-2">
              <FaMoneyCheckAlt />
            </span>
            <div>
              <p>Main Balance: 00.00</p>
              <p>Credit Balance: 00.00</p>
            </div>
          </div>
          <div className="ms-10">
            <p className="bg-yellow-300 rounded-lg p-2">
              <GrNotification />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
