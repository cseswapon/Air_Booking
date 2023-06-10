import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAllFlightQuery } from "../../../../../redux/features/api/apiSlice";
import connectingTime from "./assest/timeimg.svg";
import { BsFillBagDashFill } from "react-icons/bs";
const SearchResult = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const { isError, isLoading, isFetching, data } = useAllFlightQuery();
  // console.log(search.get("from"));
  const from = search.get("from");
  const to = search.get("to");
  const date = search.get("date");
  const newDate = new Date(date).toDateString().split(" ");

  if (!(from || to || date)) {
    setSearch({ from: "" });
    setSearch({ to: "" });
    setSearch({ date: "" });
  }

  // console.log(data?.data);

  const handelBook = (id) => {
    // console.log(id);
    navigate(`/flight/${id}`);
  };
  return (
    <div className="flex my-5">
      <div className="w-40">Filter</div>
      <div className="flex flex-col items-start">
        {data?.data.map((flights, i) => (
          <div key={i}>
            <div className="flex items-center space-x-5 p-2 rounded-sm border border-gray-300 w-full mb-4">
              <div className="text-center">
                <img
                  src={flights.flag}
                  className="w-10 mx-auto my-1"
                  alt="avatar"
                />
                <p className="text-sm">Airlines..</p>
                <p className="text-sm">BS-147</p>
              </div>
              <div className="flex space-x-5 items-center">
                <div>
                  <h1 className="text-2xl font-bold">
                    {from.toLocaleUpperCase()}
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
                    {to.toLocaleUpperCase()}
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
                  {flights.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <button
                  className="border p-1 px-2 bg-blue-500 text-white rounded"
                  onClick={() => handelBook(flights._id)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
