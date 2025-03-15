import React, { useState } from "react";
import AppBar from "../appBar/AppBar";
import SideBar from "../sideBar/SideBar";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <div className="layout">
      {/* Sidebar (Now above AppBar) */}
      <SideBar
        expanded={sidebarExpanded}
        toggleExpand={() => setSidebarExpanded(!sidebarExpanded)}
      />

      {/* AppBar */}
      <AppBar
        logo="/logo.png"
        links=[
          { name: "Home", href: "#" },
          { name: "Profile", href: "#" }
        ]
      />

      {/* Main Wrapper */}
      <div className="main-container" style={{ marginTop: 50 }}>
        {/* Content */}
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
