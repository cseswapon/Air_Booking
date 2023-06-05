import React, { useState } from "react";

const MultiCity = () => {
  let [count, setCount] = useState(0);
  const handelRemove = (e) => {
    setCount(--count);
    if (e.target) {
      e.target.parentElement.style.display = "none";
    }
  };
  // console.log(count);

  return (
    <div>
      <form>
        <div className="flex items-center">
          <div>
            <span className="flex items-center space-x-3 mb-3">
              <input
                autoComplete="off"
                type="text"
                className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="City Name"
              />
              <input
                autoComplete="off"
                type="text"
                className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="City Name"
              />
              <input
                autoComplete="off"
                type="date"
                className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Start Date"
              />
            </span>
            <span className="flex items-center space-x-3 mb-3">
              <input
                autoComplete="off"
                type="text"
                className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="City Name"
              />
              <input
                autoComplete="off"
                type="text"
                className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="City Name"
              />
              <input
                autoComplete="off"
                type="date"
                className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                placeholder="Start Date"
              />
            </span>
            {Array.from({ length: count }, (v, i) => (
              <span key={i} className="flex items-center space-x-3 mb-3">
                <input
                  autoComplete="off"
                  type="text"
                  className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                  placeholder="City Name"
                />
                <input
                  autoComplete="off"
                  type="text"
                  className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                  placeholder="City Name"
                />
                <input
                  autoComplete="off"
                  type="date"
                  className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
                  placeholder="Start Date"
                />
                <span
                  onClick={(e) => {
                    handelRemove(e);
                  }}
                  className="text-red-600 font-bold rounded p-2 cursor-pointer xx"
                >
                  X
                </span>
              </span>
            ))}
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mx-6"
            >
              Search
            </button>
          </div>
        </div>
        <button
          disabled={count >= 2 ? true : false}
          type="button"
          onClick={() => setCount(count + 1)}
          className="my-2 mr-3 border-spacing-2 p-2 ring-1 ring-gray-300 rounded text-gray-600"
        >
          + Add City
        </button>
      </form>
    </div>
  );
};

export default MultiCity;
