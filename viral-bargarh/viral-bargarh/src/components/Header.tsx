import { useState } from "react";
import { NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header style={styles.header}>
      {/* Brand */}
      <div style={styles.brand}>
        <img src={logo} alt="Viral Bargarh Logo" style={styles.logo} />
        <span style={styles.name}>Viral Bargarh</span>
      </div>

      {/* Desktop Navigation */}
      <nav style={styles.navDesktop}>
        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>
        <NavLink to="/category" style={navStyle}>
          District
        </NavLink>
      </nav>

      {/* Right Controls */}
      <div style={styles.controls}>
        <LanguageToggle />

        <button onClick={toggleTheme} style={styles.themeBtn} aria-label="Theme">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Hamburger (Mobile) */}
        <button
          style={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={styles.mobileMenu}>
          <NavLink to="/" onClick={() => setOpen(false)} style={styles.mobileLink}>
            Home
          </NavLink>
          <NavLink
            to="/category"
            onClick={() => setOpen(false)}
            style={styles.mobileLink}
          >
            District
          </NavLink>
        </div>
      )}
    </header>
  );
}

/* Active link style */
const navStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? 600 : 500,
  color: isActive ? "var(--accent)" : "var(--text-primary)",
});

/* Styles */
const styles: Record<string, React.CSSProperties> = {
  header: {
    background: "var(--card)",
    borderBottom: "1px solid var(--border)",
    padding: "0.75rem 1.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
    flexWrap: "wrap",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },

  logo: {
    width: "36px",
    height: "36px",
  },

  name: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "var(--primary)",
    whiteSpace: "nowrap",
  },

  navDesktop: {
    display: "flex",
    gap: "1.5rem",
  },

  controls: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },

  themeBtn: {
    background: "none",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "4px 8px",
    cursor: "pointer",
  },

  hamburger: {
    display: "none",
    fontSize: "1.4rem",
    background: "none",
    border: "none",
    cursor: "pointer",
  },

  mobileMenu: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    padding: "0.75rem 0",
  },

  mobileLink: {
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "var(--text-primary)",
  },
};
