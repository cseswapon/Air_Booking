import React, { useEffect } from "react";
import withDashboard from "../../../shared/DashboardLayout/DashboardLayout";
import { useGetPaymentQuery } from "../../../../redux/features/api/apiSlice";
import { useSelector } from "react-redux";

const Payment = () => {
  const { isSuccess, isError, data, refetch } = useGetPaymentQuery("Payment", {
    refetchOnMount: true,
  });
  const email = useSelector((state) => state.login.email);
  const role = useSelector((state) => state.login.role);

  useEffect(() => {
    refetch()
  },[refetch])
  // console.log(data);
  return (
    <div className="mx-10 my-3">
      <h1 className="text-2xl font-bold border-b-2 pb-3 mb-2">Payment</h1>
      <button
        className="border p-2 bg-green-700 text-white"
        onClick={() => refetch()}
      >
        Refresh
      </button>
      <span className="font-bold text-red-700 ms-4">
        Please Refresh the page and show update data !!!
      </span>
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
          {role === 'user' && <tbody>
            {data?.data
              .filter((name) => name.email === email)
              .map((_name, i) => {
                return (
                  <tr key={i}>
                    <td className="py-2 px-4 border-b">{i + 1}</td>
                    <td className="py-2 px-4 border-b">{_name?.email}</td>
                    <td className="py-2 px-4 border-b">{_name?.createdAt}</td>
                    <td className="py-2 px-4 border-b">${_name?.amount}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        disabled={true}
                        className="bg-blue-400 text-white px-2 py-1 rounded cursor-not-allowed"
                      >
                        paid
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>}
          {role === 'admin' && <tbody>
            {data?.data
              .map((_name, i) => {
                return (
                  <tr key={i}>
                    <td className="py-2 px-4 border-b">{i + 1}</td>
                    <td className="py-2 px-4 border-b">{_name?.email}</td>
                    <td className="py-2 px-4 border-b">{_name?.createdAt}</td>
                    <td className="py-2 px-4 border-b">${_name?.amount}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        disabled={true}
                        className="bg-blue-400 text-white px-2 py-1 rounded cursor-not-allowed"
                      >
                        paid
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>}

        </table>
      </div>
    </div>
  );
};

export default withDashboard(Payment);
