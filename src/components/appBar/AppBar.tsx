import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import "./AppBar.css";

interface AppBarProps {
  logo: string;
  links: { name: string; href: string }[];
  variant?: "default" | "dark" | "transparent" | "bordered";
}

const AppBar: React.FC<AppBarProps> = ({
  logo,
  links,
  variant = "default",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`appbar ${variant}`}>
      <div className="appbar-container">
        {/* Logo */}
        <div className="appbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <nav className={`appbar-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link.name} href={link.href} className="appbar-link">
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="appbar-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default AppBar;
