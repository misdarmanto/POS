import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BottomMenu.css";

interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

interface BottomMenuProps {
  items: MenuItem[];
}

const BottomMenu: React.FC<BottomMenuProps> = ({ items }) => {
  const location = useLocation();

  return (
    <nav className="bottom-menu">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`menu-item ${
            location.pathname === item.path ? "active" : ""
          }`}
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomMenu;
