import { useLanguage } from "../context/LanguageContext";
import { homeContent as en } from "../data/news.en";
import { homeContent as or } from "../data/news.or";
import NewsCard from "../components/NewsCard";
import SEO from "../components/SEO";

export default function Home() {
  const { lang } = useLanguage();
  const content = lang === "en" ? en : or;

  return (
    <main className="container">
      <section style={styles.bento}>
        {/* HERO STORY */}
        <article style={styles.hero}>
          <span style={styles.badge}>
            {lang === "en" ? "Top Story" : "ମୁଖ୍ୟ ସମ୍ବାଦ"}
          </span>
          <h1 style={styles.heroTitle}>{content.mainStory.title}</h1>
          <p style={styles.heroSummary}>{content.mainStory.summary}</p>
        </article>

        {/* RIGHT STACK */}
        <div style={styles.stack}>
          <NewsCard
  title={content.topStory.title}
  summary={content.topStory.summary}
  category={lang === "en" ? "Featured" : "ବିଶେଷ"}
  articleId="1"
  image="/news/placeholder.jpg"
/>



          <div style={styles.latestBox}>
            <h4 style={styles.latestTitle}>
              {lang === "en" ? "Latest Updates" : "ନୂଆ ଖବର"}
            </h4>

            <ul style={styles.latestList}>
              {content.latest.map((item, index) => (
                <li key={index} style={styles.latestItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SEO
  title={
    lang === "en"
      ? "Viral Bargarh | Latest District News"
      : "ଭାଇରାଲ ବରଗଡ଼ | ନୂଆ ଜିଲ୍ଲା ସମ୍ବାଦ"
  }
  description={
    lang === "en"
      ? "Get the latest and trusted news from Bargarh district. Breaking news, politics, and local updates."
      : "ବରଗଡ଼ ଜିଲ୍ଲାର ସବୁଠୁ ନୂଆ ଓ ଭରସାଯୋଗ୍ୟ ଖବର ପାଉନ୍ତୁ।"
  }
/>

      </section>
    </main>
  );
}
const styles: Record<string, React.CSSProperties> = {
  bento: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "1.25rem",
    alignItems: "stretch",
  },

  hero: {
    background: "#ffffff",
    padding: "2.25rem",
    borderRadius: "14px",
    boxShadow: "0 6px 30px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  badge: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#1d4ed8",
    marginBottom: "0.75rem",
    textTransform: "uppercase",
  },

  heroTitle: {
    fontSize: "1.9rem",
    fontWeight: 700,
    lineHeight: 1.25,
    marginBottom: "0.75rem",
  },

  heroSummary: {
    fontSize: "1rem",
    color: "#4b5563",
    maxWidth: "90%",
  },

  stack: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  latestBox: {
    background: "#ffffff",
    padding: "1.25rem",
    borderRadius: "14px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
  },

  latestTitle: {
    fontSize: "0.95rem",
    fontWeight: 600,
    marginBottom: "0.75rem",
  },

  latestList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },

  latestItem: {
    fontSize: "0.9rem",
    color: "#374151",
    borderLeft: "3px solid #e5e7eb",
    paddingLeft: "0.5rem",
  },
};
