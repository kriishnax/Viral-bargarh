import { useLanguage } from "../context/LanguageContext";
import { categoryContent as en } from "../data/category.en";
import { categoryContent as or } from "../data/category.or";
import NewsCard from "../components/NewsCard";
import SEO from "../components/SEO";

export default function Category() {
  const { lang } = useLanguage();
  const content = lang === "en" ? en : or;

  return (
    <>
      {/* SEO */}
      <SEO
        title={
          lang === "en"
            ? "District News | Viral Bargarh"
            : "ଜିଲ୍ଲା ସମ୍ବାଦ | ଭାଇରାଲ ବରଗଡ଼"
        }
        description={content.description}
      />

      <main className="container">
        {/* Category Header */}
        <section style={styles.hero}>
          <h1 style={styles.title}>{content.title}</h1>
          <p style={styles.description}>{content.description}</p>
        </section>

        {/* News Grid */}
        <section style={styles.grid}>
          {content.news.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              summary={item.summary}
              category={lang === "en" ? "District" : "ଜିଲ୍ଲା"}
              articleId="1"
              image="/src/assets/news/placeholder.jpg"
            />
          ))}
        </section>
      </main>
    </>
  );
}

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
};
