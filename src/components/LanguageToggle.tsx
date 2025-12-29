import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button onClick={toggleLang} style={styles.button}>
      {lang === "en" ? "ଓଡ଼ିଆ" : "English"}
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  button: {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    background: "#ffffff",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};
