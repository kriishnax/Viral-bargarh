import { useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import NewsCard from "../components/NewsCard";
import { articlesEn } from "../data/article.en";
import { articlesOr } from "../data/article.or";

export default function Category() {
  const { type } = useParams();
  const { lang } = useLanguage();

  const articles = lang === "en" ? articlesEn : articlesOr;

  const categoryMap: Record<string, string> = {
    district: lang === "en" ? "District" : "ଜିଲ୍ଲା",
    culture: lang === "en" ? "Culture" : "ସଂସ୍କୃତି",
    development: lang === "en" ? "Development" : "ବିକାଶ",
    crime: lang === "en" ? "Crime" : "ଅପରାଧ",
  };

  const categoryName = categoryMap[type ?? "district"];

  const filteredArticles = articles.filter(
    (a) => a.category === categoryName
  );

  return (
    <>
      <SEO
        title={`${categoryName} News | Viral Bargarh`}
        description={`Latest ${categoryName.toLowerCase()} news from Bargarh district.`}
      />

      <main className="container">
        {/* CATEGORY HEADER */}
        <section style={styles.hero}>
          <h1 style={styles.title}>{categoryName}</h1>
          <p style={styles.description}>
            {lang === "en"
              ? `Latest ${categoryName.toLowerCase()} related news and updates from Bargarh.`
              : `ବରଗଡ଼ର ${categoryName} ସମ୍ବନ୍ଧୀୟ ସମସ୍ତ ନୂତନ ଖବର।`}
          </p>
        </section>

        {/* NEWS GRID */}
        <section style={styles.grid}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                summary={item.summary}
                category={item.category}
                articleId={item.id}
                image={item.image}
              />
            ))
          ) : (
            <p style={styles.empty}>
              {lang === "en"
                ? "No articles available in this category."
                : "ଏହି ବିଭାଗରେ ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ଖବର ନାହିଁ।"}
            </p>
          )}
        </section>
      </main>
    </>
  );
}

/* ================= STYLES ================= */

const styles: Record<string, React.CSSProperties> = {
  hero: {
    marginBottom: "2rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid var(--border)",
  },

  title: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "var(--text-primary)",
  },

  description: {
    fontSize: "1rem",
    maxWidth: "720px",
    color: "var(--text-secondary)",
    lineHeight: 1.6,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "1.25rem",
  },

  empty: {
    color: "var(--text-secondary)",
    fontSize: "0.95rem",
  },
};
