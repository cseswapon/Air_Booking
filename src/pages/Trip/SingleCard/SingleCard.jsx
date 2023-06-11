import React from "react";
import withDashboard from "../../shared/DashboardLayout/DashboardLayout";
import connectingTime from "./assest/timeimg.svg";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetSingleFlightQuery } from "../../../redux/features/api/apiSlice";
import { BsFillBagDashFill } from "react-icons/bs";

const SingleCard = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("login")).token;
  const { data } = useGetSingleFlightQuery(id, token);
  const [params, setSearchParams] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const adult = Number(params.get("adult"));
  const infant = Number(params.get("infant"));
  const children = Number(params.get("children"));
  const date = params.get("date");
  const newDate = new Date(date).toDateString().split(" ");

  if (!(adult || infant || children || date || from || to)) {
    setSearchParams({ from: "" });
    setSearchParams({ to: "" });
    setSearchParams({ adult: "" });
    setSearchParams({ infant: "" });
    setSearchParams({ children: "" });
    setSearchParams({ date: "" });
  }

  const total = adult + infant + children;
  console.log(total);
  if (!data) {
    return <p className="p-9">Loading....</p>;
  }
  console.log(data, from);
  return (
    <div className="py-9 mx-9">
      {/* <h1>{id}</h1> */}
      <div className="flex items-center place-content-around space-x-5 p-2 rounded-sm border border-gray-300 w-full mb-4">
        <div className="text-center">
          <img
            src={data?.allFlight?.flag}
            className="w-10 mx-auto my-1"
            alt="avatar"
          />
          <p className="text-sm">Airlines..</p>
          <p className="text-sm">BS-147</p>
        </div>
        <div className="flex space-x-5 items-center">
          <div>
            <h1 className="text-2xl font-bold">{from.toLocaleUpperCase()}</h1>
            <p>{`${newDate[0]}, ${newDate[2]} ${newDate[1]} ${newDate[3]}`}</p>
          </div>
          <div className="flex space-x-3 items-center">
            <h1>9:50</h1>
            <img src={connectingTime} className="w-32" alt="avatar" />
            <h1>9:50</h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{to.toLocaleUpperCase()}</h1>
            <p>{`${newDate[0]}, ${newDate[2]} ${newDate[1]} ${newDate[3]}`}</p>
          </div>
        </div>
        <div className="text-sm">
          <p>
            <BsFillBagDashFill className="inline" /> 20 KG
          </p>
          <p>K-9</p>
          <p>AT7</p>
        </div>
        <div className="ml-2 text-sm text-center border-l-2 border-dotted px-4">
          <p className="text-lg font-bold">BDT</p>
          <p className="text-2xl font-bold my-1">
            {data?.allFlight?.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default withDashboard(SingleCard);
