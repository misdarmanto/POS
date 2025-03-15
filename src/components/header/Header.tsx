import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyPOS</div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </nav>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
