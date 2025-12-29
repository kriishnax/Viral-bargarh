import { useLanguage } from "../context/LanguageContext";
import { articleData as en } from "../data/article.en";
import { articleData as or } from "../data/article.or";
import NewsCard from "../components/NewsCard";
import SEO from "../components/SEO";

export default function Article() {
  const { lang } = useLanguage();
  const article = lang === "en" ? en : or;

  return (
    <>
      {/* SEO */}
      <SEO
        title={article.title}
        description={article.content[0]}
        image={article.image}
      />

      <main className="container">
        {/* Article Wrapper */}
        <article style={styles.wrapper}>
          {/* Category */}
          <span style={styles.category}>{article.category}</span>

          {/* Title */}
          <h1 style={styles.title}>{article.title}</h1>

          {/* Meta */}
          <div style={styles.meta}>
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          {/* Featured Image */}
          <div style={styles.imageWrap}>
            <img src={article.image} alt={article.title} />
          </div>

          {/* Content */}
          <div style={styles.content}>
            {article.content.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* Share (UI only) */}
          <div style={styles.share}>
            <span>{lang === "en" ? "Share:" : "ସେୟାର:"}</span>
            <button style={styles.shareBtn}>WhatsApp</button>
            <button style={styles.shareBtn}>Facebook</button>
            <button style={styles.shareBtn}>X</button>
          </div>
        </article>

        {/* Related News */}
        <section style={styles.related}>
          <h3 style={styles.relatedTitle}>
            {lang === "en" ? "Related News" : "ସମ୍ବନ୍ଧିତ ଖବର"}
          </h3>

          <div style={styles.relatedGrid}>
            <NewsCard
              title={article.title}
              category={article.category}
              articleId="1"
              image={article.image}
            />
            <NewsCard
              title={article.title}
              category={article.category}
              articleId="1"
              image={article.image}
            />
          </div>
        </section>
      </main>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    maxWidth: "760px",
    margin: "2rem auto",
    background: "#ffffff",
    padding: "2rem",
    borderRadius: "14px",
    boxShadow: "0 6px 30px rgba(0,0,0,0.05)",
  },

  category: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#1d4ed8",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "2rem",
    fontWeight: 700,
    lineHeight: 1.3,
    margin: "0.75rem 0",
  },

  meta: {
    display: "flex",
    gap: "0.5rem",
    fontSize: "0.85rem",
    color: "#6b7280",
    marginBottom: "1.5rem",
  },

  imageWrap: {
    width: "100%",
    height: "360px",
    marginBottom: "1.5rem",
    overflow: "hidden",
    borderRadius: "12px",
  },

  content: {
    fontSize: "1rem",
    lineHeight: 1.8,
    color: "#374151",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  share: {
    marginTop: "2rem",
    display: "flex",
    gap: "0.75rem",
    alignItems: "center",
    flexWrap: "wrap",
  },

  shareBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
    background: "#ffffff",
    cursor: "pointer",
    fontSize: "0.85rem",
  },

  related: {
    maxWidth: "1200px",
    margin: "2rem auto",
  },

  relatedTitle: {
    fontSize: "1.2rem",
    fontWeight: 600,
    marginBottom: "1rem",
  },

  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "1rem",
  },
};
