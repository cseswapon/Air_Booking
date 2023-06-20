import React, { useEffect } from "react";
import withDashboard from "../../shared/DashboardLayout/DashboardLayout";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  useAddPaymentMutation,
  useGetSingleFlightQuery,
} from "../../../redux/features/api/apiSlice";
import time from "./assest/timeimg.svg";
import { useSelector } from "react-redux";

const TicketBooking = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("login")).token;
  const { data } = useGetSingleFlightQuery(id, token);
  const [params, setSearchParams] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const adults = params.get("adult");
  const childres = params.get("children");
  const infants = params.get("infant");
  if (!(from || to)) {
    setSearchParams({ from: "" });
    setSearchParams({ to: "" });
  }

  const { sitBooking, passInfo, login } = useSelector((state) => state);
  console.log(login.email);
  const { adult, child, infant } = passInfo;
  //   console.log(adult, child.length, infant.length);
  // console.log(child);

  const [addPayment, { isError, isLoading, isSuccess, data: fdata }] =
    useAddPaymentMutation();

  // console.log(addPayment);

  const handelPayment = () => {
    const obj = {
      email: login.email,
      amount:
        Number(data?.allFlight.price) * adults ||
        1 * childres ||
        1 * infant ||
        1,
      from,
      to,
      airlinesName: data?.allFlight.name,
      adult: adults,
      infant: infants,
      children: childres,
    };
    // console.log(obj);
    addPayment(obj);
    // console.log(isSuccess)
  };
  const navigator = useNavigate();

  useEffect(() => {
    console.log(isSuccess);
    if (isSuccess) {
      alert("Data Save Successful");
      navigator("/");
      // window.location.href = "/";
    }
  });

  // console.log(isError,isLoading);

  return (
    <>
      <div className="grid grid-cols-2 px-5">
        <div className="px-5">
          <h1 className="text-2xl font-bold border-b-2 pb-2 my-3">
            Passenger Info
          </h1>
          {adult?.adult_fname_0?.length > 0 && (
            <div className="my-2">
              <p className="font-bold border-b-2 border-dotted my-2">Adult</p>
              <p className="my-2">
                Fast Name: <b>{adult.adult_fname_0}</b>
              </p>
              <p className="my-2">
                Last Name: <b>{adult.adult_lname_0}</b>
              </p>
              <p className="my-2">
                DOB: <b>{adult.adult_date_0}</b>
              </p>
            </div>
          )}
          {adult?.adult_fname_1?.length && (
            <div className="my-2">
              <p className="font-bold border-b-2 border-dotted my-2">Adult</p>
              <p className="my-2">
                Fast Name: <b>{adult.adult_fname_1}</b>
              </p>
              <p className="my-2">
                Last Name: <b>{adult.adult_lname_1}</b>
              </p>
              <p className="my-2">
                DOB: <b>{adult.adult_date_1}</b>
              </p>
            </div>
          )}
          {child?.children_fname_0 && (
            <div className="my-2">
              <p className="font-bold border-b-2 border-dotted my-2">
                Children
              </p>
              <p className="my-2">
                Fast Name: <b>{child.children_fname_0}</b>
              </p>
              <p className="my-2">
                Last Name: <b>{child.children_lname_0}</b>
              </p>
              <p className="my-2">
                DOB: <b>{child.children_date_0}</b>
              </p>
            </div>
          )}
          {child?.children_fname_1 && (
            <div className="my-2">
              <p className="font-bold border-b-2 border-dotted my-2">
                Children
              </p>
              <p className="my-2">
                Fast Name: <b>{child.children_fname_1}</b>
              </p>
              <p className="my-2">
                Last Name: <b>{child.children_lname_1}</b>
              </p>
              <p className="my-2">
                DOB: <b>{child.children_date_1}</b>
              </p>
            </div>
          )}
          {infant?.infant_fname_0 && (
            <div className="my-2">
              <p className="font-bold border-b-2 border-dotted my-2">Infant</p>
              <p className="my-2">
                Fast Name: <b>{infant.infant_fname_0}</b>
              </p>
              <p className="my-2">
                Last Name: <b>{infant.infant_lname_0}</b>
              </p>
              <p className="my-2">
                DOB: <b>{infant.infant_date_0}</b>
              </p>
            </div>
          )}
          {infant?.infant_fname_1 && (
            <div className="my-2">
              <p className="font-bold border-b-2 border-dotted my-2">Infant</p>
              <p className="my-2">
                Fast Name: <b>{infant.infant_fname_1}</b>
              </p>
              <p className="my-2">
                Last Name: <b>{infant.infant_lname_1}</b>
              </p>
              <p className="my-2">
                DOB: <b>{infant.infant_date_1}</b>
              </p>
            </div>
          )}
        </div>
        {/* ticket information */}
        <div className="text-center px-5">
          <h1 className="text-2xl font-bold border-b-2 pb-2 my-3">
            Ticket Info
          </h1>
          <div>
            <img
              className="w-1/4 mx-auto"
              src={data?.allFlight.flag}
              alt="avatar"
            />
            <div className="flex justify-around items-center px-4 my-2">
              <div className="text-2xl font-bold">{from.toUpperCase()}</div>
              <img className="w-2/6" src={time} alt="avatar" />
              <div className="text-2xl font-bold">{to.toUpperCase()}</div>
            </div>
            <h1 className="text-center text-3xl text-blue-500 font-bold my-3 py-3">
              {data?.allFlight.name}
            </h1>
            <div className="flex justify-around items-center px-4 my-4">
              <p>Start {data?.allFlight.start}</p>
              <p>End {data?.allFlight.end}</p>
            </div>
            <div className="py-5">
              <p className="font-bold text-2xl">
                Price:{" "}
                {data?.allFlight?.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
            <hr />
            <div className="py-5">
              <p>
                Total Price:{" "}
                {Number(
                  Number(data?.allFlight.price) *
                    sitBooking?.booking?.sitBooking.length
                )
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
            <div>
              <button
                onClick={() => handelPayment()}
                className="ring-2 bg-blue-500 text-white rounded px-5"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withDashboard(TicketBooking);
