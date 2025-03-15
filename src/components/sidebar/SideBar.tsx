import React, { useState } from "react";
import { IoMenu, IoClose, IoHome, IoSettings, IoLogOut } from "react-icons/io5";
import "./SideBar.css";

interface SideBarProps {
  activeItem?: string;
}

const menuItems = [
  { name: "Home", icon: <IoHome />, link: "#" },
  { name: "Settings", icon: <IoSettings />, link: "#" },
  { name: "Logout", icon: <IoLogOut />, link: "#" },
];

const SideBar: React.FC<SideBarProps> = ({ activeItem = "Home" }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className={`sidebar ${expanded ? "expanded" : "collapsed"}`}>
      {/* Toggle Button */}
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Menu Items */}
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`menu-item ${activeItem === item.name ? "active" : ""}`}
          >
            {item.icon}
            {expanded && <span className="menu-text">{item.name}</span>}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
