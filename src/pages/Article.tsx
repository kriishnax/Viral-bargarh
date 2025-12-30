import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import { articlesEn } from "../data/article.en";
import { articlesOr } from "../data/article.or";

export default function Article() {
  const { id } = useParams();
  const { lang } = useLanguage();

  const articles = lang === "en" ? articlesEn : articlesOr;
  const article = articles.find((a) => a.id === id);
const related = articles
  .filter((a) => a.id !== id && a.category === article?.category)
  .slice(0, 3);

const fallbackRelated = articles
  .filter((a) => a.id !== id)
  .slice(0, 3);

  if (!article) {
    return <p style={{ padding: "2rem" }}>Article not found.</p>;
  }

  return (
    <>
      <SEO title={article.title} description={article.summary} />

      <main className="container">
        <article style={styles.article}>
          {/* META */}
          <div style={styles.meta}>
            <span style={styles.category}>{article.category}</span>
            <span style={styles.date}>{article.date}</span>
          </div>

          {/* TITLE */}
          <h1 style={styles.title}>{article.title}</h1>

          {/* HERO IMAGE */}
          <div style={styles.imageWrap}>
            <img
              src={article.image}
              alt={article.title}
              style={styles.image}
            />
          </div>

          {/* CONTENT */}
          <section style={styles.content}>
            {article.content.map((para, i) => (
              <p key={i} style={styles.paragraph}>
                {para}
              </p>
            ))}
          </section>
{/* RELATED ARTICLES */}
<section style={styles.related}>
  <h3 style={styles.relatedTitle}>
    {lang === "en" ? "Related Articles" : "ସମ୍ପର୍କିତ ଖବର"}
  </h3>

  <ul style={styles.relatedList}>
    {(related.length ? related : fallbackRelated).map((item) => (
      <li key={item.id} style={styles.relatedItem}>
        <Link to={`/article/${item.id}`} style={styles.relatedLink}>
          {item.title}
        </Link>
        <span style={styles.relatedDate}>{item.date}</span>
      </li>
    ))}
  </ul>
</section>

          {/* BACK */}
          <Link to="/" style={styles.back}>
            ← Back to Home
          </Link>
        </article>
      </main>
    </>
  );
}
const styles: Record<string, React.CSSProperties> = {
  article: {
    maxWidth: "760px",
    margin: "2.5rem auto",
  },

  meta: {
    display: "flex",
    gap: "1rem",
    fontSize: "0.8rem",
    color: "var(--text-secondary)",
    marginBottom: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },

  category: {
    fontWeight: 600,
    color: "#2563eb",
  },

  date: {},

  title: {
    fontSize: "2.1rem",
    lineHeight: 1.25,
    fontWeight: 700,
    marginBottom: "1.25rem",
  },

  imageWrap: {
    margin: "1.5rem 0 2rem",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  content: {
    fontSize: "1.05rem",
    lineHeight: 1.75,
    color: "var(--text-primary)",
  },

  paragraph: {
    marginBottom: "1.4rem",
  },

  back: {
    display: "inline-block",
    marginTop: "2rem",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#2563eb",
    textDecoration: "none",
  },
  related: {
  marginTop: "3rem",
  paddingTop: "1.5rem",
  borderTop: "1px solid var(--border)",
},

relatedTitle: {
  fontSize: "1rem",
  fontWeight: 700,
  marginBottom: "1rem",
},

relatedList: {
  listStyle: "none",
  padding: 0,
  margin: 0,
},

relatedItem: {
  marginBottom: "0.75rem",
  display: "flex",
  flexDirection: "column",
},

relatedLink: {
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "var(--text-primary)",
  textDecoration: "none",
  lineHeight: 1.4,
},

relatedDate: {
  fontSize: "0.75rem",
  color: "var(--text-secondary)",
},

};
