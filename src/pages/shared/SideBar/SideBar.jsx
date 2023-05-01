import React from "react";
import logo from "../../../assets/icon/logo/TBP.png";
const SideBar = () => {
  return (
    <>
      <div>
        <img
          style={{ marginLeft: "auto" }}
          className="w-3/12"
          src={logo}
          alt="avatar"
        />
      </div>
      <ul>
        <li>1st</li>
        <li>2nd</li>
      </ul>
    </>
  );
};

export default SideBar;
