import React from "react";
import AppBar from "../components/appBar";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";

const AppLayout: React.FC = () => {
  return (
    <div className="layout">
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
