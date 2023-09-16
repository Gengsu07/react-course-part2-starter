import React from "react";
import UserListPage from "./UserListPage";
import { Outlet } from "react-router-dom";

const UserList = () => {
  return (
    <div className="row">
      <div className="col">
        <UserListPage />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UserList;
