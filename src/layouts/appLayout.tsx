import React from "react";
import AppBar from "../components/appBar";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";

const AppLayout: React.FC = () => {
  return (
    <div className="layout">
      <AppBar
        logo={Logo}
        links={[
          { name: "Home", href: "#" },
          { name: "Profile", href: "#" },
        ]}
      />

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
