import React from "react";
import "./Drawer.css";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: "left" | "right" | "top" | "bottom";
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  position = "left",
  children,
}) => {
  return (
    <div>
      {/* Overlay Background */}
      <div
        className={`drawer-overlay ${open ? "show" : ""}`}
        onClick={onClose}
      ></div>

      {/* Drawer Container */}
      <div className={`drawer drawer-${position} ${open ? "open" : ""}`}>
        <button className="drawer-close" onClick={onClose}>
          &times;
        </button>
        <div className="drawer-content">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
