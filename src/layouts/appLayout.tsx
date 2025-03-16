import React from "react";
import AppBar from "../components/appBar";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";
import BottomMenu from "../components/buttomMenu";
import { IoHome, IoTime, IoPerson } from "react-icons/io5";

const AppLayout: React.FC = () => {
  const menuItems = [
    { name: "Home", path: "/", icon: <IoHome size={24} /> },
    { name: "History", path: "/history", icon: <IoTime size={24} /> },
    { name: "Profile", path: "/profile", icon: <IoPerson size={24} /> },
  ];

  return (
    <div className="layout">
      <AppBar logo={Logo} links={[{ name: "Home", href: "#" }]} />
      <div className="content">
        <Outlet />
      </div>
      <BottomMenu items={menuItems} />
    </div>
  );
};

export default AppLayout;
