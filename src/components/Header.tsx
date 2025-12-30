import { useState } from "react";
import { NavLink } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setOpen(false);

  return (
    <header style={styles.header}>
      {/* LEFT — BRAND */}
      <div style={styles.brand}>
        <img src={logo} alt="Viral Bargarh Logo" style={styles.logo} />
        <span style={styles.name}>Viral Bargarh</span>
      </div>

      {/* CENTER — DESKTOP NAV */}
      <nav style={styles.navDesktop}>
        <NavLink to="/" style={navStyle}>
          Home
        </NavLink>
        <NavLink to="/category/district" style={navStyle}>
          District
        </NavLink>
        <NavLink to="/category/culture" style={navStyle}>
          Culture
        </NavLink>
        <NavLink to="/category/development" style={navStyle}>
          Development
        </NavLink>
        <NavLink to="/category/crime" style={navStyle}>
          Crime
        </NavLink>
      </nav>

      {/* RIGHT — CONTROLS */}
      <div style={styles.controls}>
        <LanguageToggle />

        <button
          onClick={toggleTheme}
          style={styles.themeBtn}
          aria-label="Theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* HAMBURGER (MOBILE) */}
        <button
          style={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={styles.mobileMenu}>
          <NavLink to="/" onClick={closeMenu} style={styles.mobileLink}>
            Home
          </NavLink>
          <NavLink
            to="/category/district"
            onClick={closeMenu}
            style={styles.mobileLink}
          >
            District
          </NavLink>
          <NavLink
            to="/category/culture"
            onClick={closeMenu}
            style={styles.mobileLink}
          >
            Culture
          </NavLink>
          <NavLink
            to="/category/development"
            onClick={closeMenu}
            style={styles.mobileLink}
          >
            Development
          </NavLink>
          <NavLink
            to="/category/crime"
            onClick={closeMenu}
            style={styles.mobileLink}
          >
            Crime
          </NavLink>
        </div>
      )}
    </header>
  );
}

/* ================= ACTIVE LINK STYLE ================= */

const navStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? 600 : 500,
  color: isActive ? "var(--accent)" : "var(--text-primary)",
  textDecoration: "none",
});

/* ================= STYLES ================= */

const styles: Record<string, React.CSSProperties> = {
  header: {
    background: "var(--card)",
    borderBottom: "1px solid var(--border)",
    padding: "0.6rem 1.25rem",
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
    width: "60px",
    height: "60px",
    objectFit: "contain",
  },

  name: {
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "var(--primary)",
    whiteSpace: "nowrap",
  },

  navDesktop: {
    display: "flex",
    gap: "1.25rem",
  },

  controls: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },

  themeBtn: {
    background: "none",
    border: "1px solid var(--border)",
    borderRadius: "999px",
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
    marginTop: "0.75rem",
    borderTop: "1px solid var(--border)",
  },

  mobileLink: {
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "var(--text-primary)",
    textDecoration: "none",
  },
};
