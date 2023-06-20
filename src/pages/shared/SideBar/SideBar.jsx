import React from "react";
import logo from "../../../assets/icon/logo/TBP.png";
import image from "../../../assets/image/swapon.jpg";
import { HiLogout } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";
import { AiOutlineTransaction, AiTwotoneSetting } from "react-icons/ai";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { FaSellsy, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./SideBar.css";
import { useSelector } from "react-redux";
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
  const role = useSelector((state) => state.login.role);
  return (
    <>
      <div>
        <div>
          <Link to="/">
            <img
              draggable="false"
              style={{ marginLeft: "auto" }}
              className="w-3/12"
              src={logo}
              alt="avatar"
            />
          </Link>
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
            <Link to="/">
              <h1 className="text-sm font-bold">Travel Business Portal</h1>
            </Link>
            <p className="text-xs">Agent Id: 0001</p>
          </div>
        </div>
        <ul className="my-2 px-2">
          <li className="menu text-[14px]">
            <TbBrandBooking className="inline-block text-2xl me-2" /> Booking
            <ul className="sub-menu">
              <li>
                <Link to="/airTicket">
                  <FaArrowRight className="inline" /> Air Ticket
                </Link>
              </li>
              <li>
                <Link to="/hotelBooking">
                  <FaArrowRight className="inline" /> Hotel Booking
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu text-[14px]">
            <AiOutlineTransaction className="inline-block text-2xl me-2" />{" "}
            Transaction
            <ul className="sub-menu">
              <li>
                <Link to="/payment">
                  <FaArrowRight className="inline" /> Payment
                </Link>
              </li>
              <li>
                <Link to="/mainStatement">
                  <FaArrowRight className="inline" /> Main Statement
                </Link>
              </li>
            </ul>
          </li>
          {role === 'admin' && <li className="menu text-[14px]">
            <RiGitRepositoryCommitsFill className="inline-block text-2xl me-2" />{" "}
            Commissions
            <ul className="sub-menu">
              <li>
                <Link to="/flightsPackages">
                  <FaArrowRight className="inline" /> Flights Packages
                </Link>
              </li>

              <li>
                <Link to="/hotelPackages">
                  <FaArrowRight className="inline" /> Hotel Packages
                </Link>
              </li>
            </ul>
          </li>}
          <li className="menu text-[14px]">
            <AiTwotoneSetting className="inline-block text-2xl me-2" /> Setting
            <ul className="sub-menu">
              <li>
                <Link to="/profileSettings">
                  <FaArrowRight className="inline" /> Profile Settings
                </Link>
              </li>
              <li>
                <Link to="/currency">
                  <FaArrowRight className="inline" /> Currency
                </Link>
              </li>
              {role === 'admin'&& <li>
                <Link to="/report">
                  <FaArrowRight className="inline" /> Report
                </Link>
              </li>}
            </ul>
          </li>
          {role === "admin" && (
            <li className="menu text-[14px]">
              <FaSellsy className="inline-block text-2xl me-2" /> Sale
              <ul className="sub-menu">
                <li>
                  <Link to="/totalSales">
                    <FaArrowRight className="inline" /> Total Sales
                  </Link>
                </li>
              </ul>
            </li>
          )}
          {role === "admin" && (
            <li className="menu text-[14px]">
              <FaUsers className="inline-block text-2xl me-2" /> User
              <ul className="sub-menu">
                <li>
                  <Link to="/admins">
                    <FaArrowRight className="inline" /> Admins
                  </Link>
                </li>
                <li>
                  <Link to="/agent">
                    <FaArrowRight className="inline" /> Agent
                  </Link>
                </li>
              </ul>
            </li>
          )}
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
