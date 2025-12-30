import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem" }}>404</h1>
      <p>The page you are looking for does not exist.</p>

      <Link
        to="/"
        style={{
          padding: "0.6rem 1.2rem",
          borderRadius: "8px",
          background: "var(--accent)",
          color: "#fff",
          fontWeight: 600,
        }}
      >
        Go back to Home
      </Link>
    </main>
  );
}
