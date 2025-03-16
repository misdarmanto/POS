import React, { useState } from "react";
import AppBar from "../appBar";
import SideBar from "../sideBar/SideBar";
import "./Layout.css";
import Logo from "../../assets/logo.png";

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
      <AppBar logo={Logo} links={[{ name: "Home", href: "#" }]} />

      {/* Main Wrapper */}
      <div className="main-container" style={{ marginTop: 50 }}>
        {/* Content */}
        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
