import React from "react";
import logo from "../../../assets/icon/logo/TBP.png";
import image from "../../../assets/image/swapon.jpg";
import { HiLogout } from "react-icons/hi";
const SideBar = () => {
  const handelLogout = () => {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div>
        <div>
          <img
            draggable="false"
            style={{ marginLeft: "auto" }}
            className="w-3/12"
            src={logo}
            alt="avatar"
          />
        </div>
        <div className="flex items-center border-b-2 border-gray-200 py-3">
          <div>
            <img
              className="w-14 rounded-full border-2 border-yellow-50"
              src={image}
              alt="avatar"
            />
          </div>
          <div className="ms-1">
            <h1 className="text-sm font-bold">Travel Business Portal</h1>
            <p className="text-xs">Agent Id: 0001</p>
          </div>
        </div>
        <ul className="my-2">
          <li>
            Booking
            <ul>
              <li>Air Ticket</li>
              <li>Hotel Booking</li>
            </ul>
          </li>
          <li>
            Transaction
            <ul>
              <li>Payment</li>
              <li>Main Statement</li>
            </ul>
          </li>
          <li>
            Commissions
            <ul>
              <li>Flights Packages</li>
              <li>Hotel Packages</li>
            </ul>
          </li>
          <li>
            Setting
            <ul>
              <li>Profile Settings</li>
              <li>Currency</li>
            </ul>
          </li>
          <li>
            Sale
            <ul>
              <li>Total Sales</li>
            </ul>
          </li>
          <li>
            User
            <ul>
              <li>Admins</li>
              <li>Agent</li>
            </ul>
          </li>
        </ul>
        <button
          onClick={() => handelLogout()}
          className="absolute bottom-2 left-2 border border-red-500 hover:border-white p-1 rounded-sm text-sm text-red-500 hover:text-white"
        >
          Logout <HiLogout className="inline" />
        </button>
      </div>
    </>
  );
};

export default SideBar;
