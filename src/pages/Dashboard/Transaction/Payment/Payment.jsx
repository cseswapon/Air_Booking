import React from 'react';
import withDashboard from '../../../shared/DashboardLayout/DashboardLayout';

const Payment = () => {
    return (
      <div className="mx-10 my-3">
        <h1 className="text-2xl font-bold border-b-2 pb-3 mb-2">Payment</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white text-center">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Date and Time</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">example@example.com</td>
                <td className="py-2 px-4 border-b">2023-06-21 10:00 AM</td>
                <td className="py-2 px-4 border-b">$100</td>
                            <td className="py-2 px-4 border-b">
                                <button disabled={true} className='bg-blue-400 text-white px-2 py-1 rounded cursor-not-allowed'>paid</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default withDashboard(Payment);