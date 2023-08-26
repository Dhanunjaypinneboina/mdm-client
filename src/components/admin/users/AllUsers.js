import React, { Fragment, useContext, useEffect, useState } from "react";
//  import moment from "moment";
import { UserContext } from "./index";

// const apiURL = process.env.REACT_APP_API_URL;
import { fetchData } from "./Actions";

const AllUsers = (props) => {
  const { data, dispatch } = useContext(UserContext);
  //  const { users } = data;
  const { users, loading } = data;
  console.log(users);

  useEffect(() => {
    fetchData(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* This method call the editmodal & dispatch product context */
  //   const editProduct = (pId, product, type) => {
  //     if (type) {
  //       dispatch({
  //         type: "editProductModalOpen",
  //         product: { ...product, pId: pId },
  //       });
  //     }
  //   };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <svg
          className="w-12 h-12 animate-spin text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="col-span-1 overflow-auto bg-white shadow-lg p-4">
        <table className="table-auto border w-full my-2">
          <thead>
            <tr>
              <th className="px-4 py-2 border text-center">Name</th>
              <th className="px-4 py-2 border text-center">Email</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, i) => (
                <tr key={i} className="border-b">
                  <td className="text-center">{user.name}</td>
                  <td className="text-center">{user.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="text-xl text-center font-semibold py-8"
                >
                  No Users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

// const UsersTable = ({ index, user }) => {
//   return (
//     <div>

//     </div>
//   );
// };

export default AllUsers;
