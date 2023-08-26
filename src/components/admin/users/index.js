import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";

import AllUsers from "./AllUsers";
import { userState, userReducer } from "./UserContext";

/* This context manage all of the orders component's data */
export const UserContext = createContext();

const UsersComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <AllUsers />
    </div>
  );
};

const Users = (props) => {
  const [data, dispatch] = useReducer(userReducer, userState);
  return (
    <Fragment>
      <UserContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<UsersComponent />} />
      </UserContext.Provider>
    </Fragment>
  );
};

export default Users;
