import React from "react";

const OneWay = () => {
  return (
    <>
      <div className="container mx-auto mt-5">
        <form className="flex items-center space-x-5">
          <input
            type="text"
            className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="City Name"
          />
          <input
            type="text"
            className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="City Name"
          />
          <input
            type="date"
            className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            placeholder="Date"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default OneWay;
