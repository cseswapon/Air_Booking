import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import withDashboard from "../../shared/DashboardLayout/DashboardLayout";
import "./FlightBooking.css";
import { useGetSingleFlightQuery } from "../../../redux/features/api/apiSlice";
import { useDispatch } from "react-redux";
import { sitBook } from "../../../redux/features/sitBooking/sitBookingSlice";
const FlightBooking = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("login")).token;
  const { data } = useGetSingleFlightQuery(id, token);
  const [params, setSearchParams] = useSearchParams();
  const from = params.get("from");
  const to = params.get("to");
  const adult = params.get("adult");
  const child = params.get("child");
  const infant = params.get("infant");
  if (!(from || to)) {
    setSearchParams({ from: "" });
    setSearchParams({ to: "" });
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(data);
  let arr = [];
  let sit;
  const handelChange = (e) => {
    const { name, checked } = e.target;
    let uniqueArray = [];
    if (checked) {
      arr.push(name);
      uniqueArray = [...new Set(arr)];
    }
    if (!checked) {
      if (arr.includes(name)) {
        arr.pop(name);
        uniqueArray = [...new Set(arr)];
      }
    }
    sit = {
      sitBooking: uniqueArray,
    };
    // setSit(uniqueArray);
  };
  // console.log(sit);
  // sit define
  const handelSubmit = () => {
    // alert('Hello world')
    if (!sit) {
      return alert("Please Selected your sit");
    }
    // console.log(sit);
    dispatch(sitBook(sit));
    navigate(
      `/flight/ticket/booking/${id}?from=${from}&&to=${to}&&adult=${adult}&&child=${child}&&infant=${infant}`
    );
  };
  return (
    <>
      <div className="grid grid-cols-1">
        <p className="text-center my-3 font-bold text-3xl">Sit Booking</p>
        <div>
          {/* sit design start*/}
          <div className="plane">
            <div className="cockpit">
              <h1>Seat Selection</h1>
            </div>
            <div className="exit exit--front fuselage"></div>
            <ol className="cabin fuselage">
              {Array.from({ length: 10 }, (v, i) => (
                <li key={i} className={`row row--${i + 1}`}>
                  <ol className="seats" type="A">
                    {Array.from(Array(6))
                      .map((e, i) => i + 65)
                      .map((x) => String.fromCharCode(x))
                      .map((x, y) => (
                        <li key={y} className="seat">
                          <input
                            name={`${i + 1}${x}`}
                            onChange={(e) => handelChange(e)}
                            type="checkbox"
                            id={`${i + 1}${x}`}
                          />
                          <label htmlFor={`${i + 1}${x}`}>{`${
                            i + 1
                          }${x}`}</label>
                        </li>
                      ))}
                  </ol>
                </li>
              ))}
            </ol>
            <div className="exit exit--back fuselage"></div>
          </div>
          {/* sit design end*/}
        </div>
        <div className="mx-auto">
          <button
            onClick={() => handelSubmit()}
            className="border w-32 p-2 bg-blue-600 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default withDashboard(FlightBooking);
