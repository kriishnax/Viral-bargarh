import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand */}
        <div style={styles.section}>
          <h3 style={styles.brand}>Viral Bargarh</h3>
          <p style={styles.text}>
            {lang === "en"
              ? "Your trusted source for local news and updates from Bargarh district."
              : "ବରଗଡ଼ ଜିଲ୍ଲାର ସ୍ଥାନୀୟ ଓ ଭରସାଯୋଗ୍ୟ ସମ୍ବାଦର ଆପଣଙ୍କ ଉତ୍ସ।"}
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h4 style={styles.heading}>
            {lang === "en" ? "Quick Links" : "ଦ୍ରୁତ ଲିଙ୍କ"}
          </h4>
          <ul style={styles.list}>
            <li>Home</li>
            <li>District</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div style={styles.section}>
          <h4 style={styles.heading}>
            {lang === "en" ? "Connect" : "ସଂଯୋଗ"}
          </h4>
          <ul style={styles.list}>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>WhatsApp</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} Viral Bargarh. All rights reserved.
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: "var(--card)",
    borderTop: "1px solid var(--border)",
    marginTop: "3rem",
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "2rem 1rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2rem",
  },

  section: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },

  brand: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "var(--primary)",
  },

  heading: {
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "var(--text-primary)",
  },

  text: {
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    lineHeight: 1.6,
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    fontSize: "0.9rem",
    color: "var(--text-secondary)",
    cursor: "pointer",
  },

  bottom: {
    borderTop: "1px solid var(--border)",
    padding: "0.75rem 1rem",
    textAlign: "center",
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
  },
};
