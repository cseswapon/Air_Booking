import React, { useState } from "react";
import withDashboard from "../../shared/DashboardLayout/DashboardLayout";
import connectingTime from "./assest/timeimg.svg";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetSingleFlightQuery } from "../../../redux/features/api/apiSlice";
import { BsFillBagDashFill } from "react-icons/bs";
import Adult from "../PassengerInfo/Adult/Adult";
import Children from "../PassengerInfo/Children/Children";
import Infant from "../PassengerInfo/Infant/Infant";
import { useDispatch } from "react-redux";
import {
  addAdult,
  addChild,
  addInfant,
} from "../../../redux/features/passInfo/passInfo";

const SingleCard = () => {
  const [value, setValue] = useState([]);
  const [childvalue, setChildValue] = useState([]);
  const [adultdvalue, setAdultValue] = useState([]);
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

  console.log(children);

  if (!(adult || infant || children || date || from || to)) {
    setSearchParams({ from: "" });
    setSearchParams({ to: "" });
    setSearchParams({ adult: "" });
    setSearchParams({ infant: "" });
    setSearchParams({ children: "" });
    setSearchParams({ date: "" });
  }
  // const total = adult + infant + children;
  const navigator = useNavigate();
  const dispatch = useDispatch();
  if (!data) {
    return <p className="p-9">Loading....</p>;
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addChild(childvalue));
    dispatch(addInfant(value));
    dispatch(addAdult(adultdvalue));
    navigator(
      `/flight/booking/${id}?from=${from}&&to=${to}&&adult=${adult}&&child=${children}&&infant=${infant}`
    );
  };

  return (
    <div className="py-9 mx-9">
      <p className="mb-5 text-2xl font-bold">Passenger Information</p>
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
            <h1 className="text-2xl font-bold">
              {from.slice(0, 3).toLocaleUpperCase()}
            </h1>
            <p>{`${newDate[0]}, ${newDate[2]} ${newDate[1]} ${newDate[3]}`}</p>
          </div>
          <div className="flex space-x-3 items-center">
            <h1>9:50</h1>
            <img src={connectingTime} className="w-32" alt="avatar" />
            <h1>9:50</h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {to.slice(0, 3).toLocaleUpperCase()}
            </h1>
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
      <form onSubmit={handelSubmit}>
        {/* adult */}
        {adult > 0 && <p className="my-2 text-2xl font-bold">Adult</p>}
        {adult > 0 &&
          Array.from({ length: adult }, (_, i) => (
            <Adult
              className="my-3"
              values={i}
              adultdvalue={adultdvalue}
              setAdultValue={setAdultValue}
              key={i}
            />
          ))}
        {/* children */}
        {children > 0 && <p className="my-2 text-2xl font-bold">Children</p>}
        {children > 0 &&
          Array.from({ length: children }, (_, i) => (
            <Children
              key={i}
              values={i}
              setChildValue={setChildValue}
              childvalue={childvalue}
            />
          ))}
        {/* infant */}
        {infant > 0 && <p className="my-2 text-2xl font-bold">Infant</p>}
        {infant > 0 &&
          Array.from({ length: infant }, (_, i) => (
            <Infant key={i} values={i} value={value} setValue={setValue} />
          ))}
        <button className="btn-blue w-40 p-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default withDashboard(SingleCard);
