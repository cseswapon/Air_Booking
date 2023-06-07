import React, { Fragment } from "react";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";

export default function withDashboard(Component) {
  const DashboardLayout = () => {

    return (
      <Fragment>
        <div className="flex flex-1">
          <div className="w-64 bg-blue-950 text-white h-screen fixed z-10">
            <SideBar />
          </div>
          <div className="w-full ml-60">
            <TopBar />
            <Component />
          </div>
        </div>
        {/* This is a main component */}
      </Fragment>
    );
  };
  return DashboardLayout;
}
