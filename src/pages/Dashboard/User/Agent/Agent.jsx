import React from "react";
import withDashboard from "../../../shared/DashboardLayout/DashboardLayout";
import { useGetAllUserQuery } from "../../../../redux/features/api/apiSlice";

const Agent = () => {
  const { isError, isSuccess,isLoading, data } = useGetAllUserQuery();
  // console.log(data?.data);
  if (isLoading) {
    <h1>loading...</h1>;
  }
  return (
    <div className="px-5 mx-5 my-5">
      <h1 className="text-2xl font-bold border-b-2 pb-3 mb-2">All Agent</h1>
      <table className="min-w-full bg-white text-center">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Contact Number</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.data
            ?.filter(_name=>_name.role!=='admin')
            ?.map((_name, i) => {
            return (
              <tr key={i}>
                <td className="py-2 px-4 border-b">{i + 1}</td>
                <td className="py-2 px-4 border-b">{_name?.personalName}</td>
                <td className="py-2 px-4 border-b">{_name?.email}</td>
                <td className="py-2 px-4 border-b">{_name?.contactNumber}</td>
                <td className="py-2 px-4 border-b ">
                  <span
                    className={
                      _name?.role === "admin"
                        ? "bg-blue-900 text-white p-1 rounded"
                        : "bg-yellow-300 text-black p-1 rounded"
                    }
                  >
                    {_name?.role}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    disabled
                    className="p-1 bg-blue-300 rounded text-white"
                  >
                    {_name?.status}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default withDashboard(Agent);
