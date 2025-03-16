import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="layout">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
