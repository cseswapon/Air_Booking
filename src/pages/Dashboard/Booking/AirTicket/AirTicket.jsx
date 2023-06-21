import React from "react";
import withDashboard from "../../../shared/DashboardLayout/DashboardLayout";

const AirTicket = () => {
  return (
    <div className="mx-10 my-3">
      <h1 className="text-2xl font-bold border-b-2 pb-3 mb-2">Air Tickets</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-center">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">From</th>
              <th className="py-2 px-4 border-b">To</th>
              <th className="py-2 px-4 border-b">Airlines Name</th>
              <th className="py-2 px-4 border-b">Adult</th>
              <th className="py-2 px-4 border-b">Children</th>
              <th className="py-2 px-4 border-b">Infant</th>
              <th className="py-2 px-4 border-b">Date and Time</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">example@example.com</td>
              <td className="py-2 px-4 border-b">$100</td>
              <td className="py-2 px-4 border-b">New York</td>
              <td className="py-2 px-4 border-b">London</td>
              <td className="py-2 px-4 border-b">Airline X</td>
              <td className="py-2 px-4 border-b">2</td>
              <td className="py-2 px-4 border-b">1</td>
              <td className="py-2 px-4 border-b">0</td>
              <td className="py-2 px-4 border-b">2023-06-21 10:00 AM</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 me-2 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default withDashboard(AirTicket);
