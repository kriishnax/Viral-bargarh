import { useLanguage } from "../context/LanguageContext";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function Home() {
  const { lang } = useLanguage();

  const t = {
    en: {
      heroBadge: "Top Story",
      heroTitle: "Dhanu Yatra Celebrations Begin in Bargarh",
      heroDesc:
        "Preparations are underway in Bargarh for the annual Dhanu Yatra, one of the world’s largest open-air theatrical festivals.",
      heroImage: "/news/dhanu-yatra.jpg",

      highlights: [
        {
          title: "Administration reviews Dhanu Yatra arrangements",
          link: "/article/2",
        },
        {
          title: "Community participation grows ahead of festival",
          link: "/article/4",
        },
        {
          title: "Traffic & security plan announced",
          link: "/article/2",
        },
        {
          title: "Visitors expected from across Odisha",
          link: "/article/1",
        },
      ],

      featured: [
        {
          title: "Community participation grows ahead of Dhanu Yatra",
          image: "/news/bargarh-city.jpg",
          link: "/article/4",
        },
        {
          title: "Administration reviews arrangements ahead of festival",
          image: "/news/admin-meeting.jpg",
          link: "/article/2",
        },
      ],

      categories: ["District", "Culture", "Development", "Crime"],
    },

    or: {
      heroBadge: "ମୁଖ୍ୟ ଖବର",
      heroTitle: "ବରଗଡ଼ରେ ଧନୁଯାତ୍ରା ଉତ୍ସବ ଆରମ୍ଭ",
      heroDesc:
        "ବିଶ୍ୱପ୍ରସିଦ୍ଧ ଧନୁଯାତ୍ରା ଉତ୍ସବ ପାଇଁ ବରଗଡ଼ରେ ପ୍ରସ୍ତୁତି ଜୋରଦାର ଭାବେ ଚାଲିଛି।",
      heroImage: "/news/dhanu-yatra.jpg",

      highlights: [
        {
          title: "ଧନୁଯାତ୍ରା ପାଇଁ ପ୍ରଶାସନର ସମୀକ୍ଷା",
          link: "/article/2",
        },
        {
          title: "ସମୁଦାୟର ସକ୍ରିୟ ଭାଗିଦାରୀ",
          link: "/article/4",
        },
        {
          title: "ସୁରକ୍ଷା ଓ ଯାତାୟାତ ବ୍ୟବସ୍ଥା",
          link: "/article/2",
        },
        {
          title: "ରାଜ୍ୟର ବିଭିନ୍ନ ସ୍ଥାନରୁ ଆସିବେ ପର୍ଯ୍ୟଟକ",
          link: "/article/1",
        },
      ],

      featured: [
        {
          title: "ଧନୁଯାତ୍ରା ପାଇଁ ସମୁଦାୟର ଭୂମିକା",
          image: "/news/bargarh-city.jpg",
          link: "/article/4",
        },
        {
          title: "ଧନୁଯାତ୍ରା ପୂର୍ବରୁ ପ୍ରଶାସନର ସମୀକ୍ଷା",
          image: "/news/admin-meeting.jpg",
          link: "/article/2",
        },
      ],

      categories: ["ଜିଲ୍ଲା", "ସଂସ୍କୃତି", "ବିକାଶ", "ଅପରାଧ"],
    },
  }[lang];

  return (
    <>
      <SEO
        title="Viral Bargarh | Local News"
        description="Latest local news, updates, and stories from Bargarh district."
      />

      {/* HERO SECTION */}
      {/* TOP STORY – EDITORIAL HERO */}
<section style={styles.topStory}>
  <div style={styles.topStoryContent}>
    <span style={styles.topBadge}>{t.heroBadge}</span>

    <h1 style={styles.topTitle}>{t.heroTitle}</h1>

    <p style={styles.topDesc}>{t.heroDesc}</p>

    <Link to="/article/1" style={styles.readMore}>
      {lang === "en" ? "Read Full Story →" : "ପୁରା ଖବର ପଢନ୍ତୁ →"}
    </Link>
  </div>

  <div style={styles.topStoryImage}>
    <img
      src={t.heroImage}
      alt={t.heroTitle}
      style={styles.topImg}
    />
  </div>
</section>
      <main className="container">
     {/* QUICK HIGHLIGHTS */}
<section style={styles.highlights}>
  <h2 style={styles.highlightsTitle}>
    {lang === "en" ? "Latest Highlights" : "ମୁଖ୍ୟ ଖବର"}
  </h2>

  <ul style={styles.highlightList}>
    {t.highlights.map((item, i) => (
      <li key={i} style={styles.highlightItem}>
        <Link to={item.link} style={styles.highlightLink}>
          {item.title}
        </Link>
      </li>
    ))}
  </ul>
</section>


       {/* FEATURED STORIES */}
<section style={styles.featured}>
  {t.featured.map((item, i) => (
    <Link key={i} to={item.link} style={styles.featuredCard}>
      <div style={styles.featuredImageWrap}>
        <img
          src={item.image}
          alt={item.title}
          style={styles.featuredImage}
        />
      </div>

      <div style={styles.featuredContent}>
        <h3 style={styles.featuredTitle}>{item.title}</h3>
        <span style={styles.featuredRead}>
          {lang === "en" ? "Read story →" : "ଖବର ପଢନ୍ତୁ →"}
        </span>
      </div>
    </Link>
  ))}
</section>


        {/* CATEGORIES */}
<section style={styles.categories}>
  <h2 style={styles.categoriesTitle}>
    {lang === "en" ? "Browse by Category" : "ବିଭାଗ ଅନୁଯାୟୀ ଖବର"}
  </h2>

  <div style={styles.categoryGrid}>
    {t.categories.map((cat, i) => (
      <Link
        key={i}
        to={`/category/${cat.toLowerCase()}`}
        style={styles.categoryItem}
      >
        <span style={styles.categoryName}>{cat}</span>
        <span style={styles.categoryArrow}>→</span>
      </Link>
    ))}
  </div>
</section>

      </main>
    </>
  );
}

/* ================= STYLES (UNCHANGED) ================= */
const styles: Record<string, React.CSSProperties> = {
  /* ================= HERO ================= */
topStory: {
  display: "grid",
  gridTemplateColumns: "1.8fr 1fr",
  gap: "0.1rem",
  padding: "3.5rem",
  borderRadius: "18px",
  background: "var(--card)",
  height: "50vh",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  marginTop: "1.5rem",
},

topStoryContent: {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
},

topBadge: {
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "#2563eb",
  letterSpacing: "0.04em",
  marginBottom: "0.6rem",
  textTransform: "uppercase",
},

topTitle: {
  fontSize: "2rem",
  lineHeight: 1.25,
  fontWeight: 700,
  marginBottom: "0.75rem",
  maxWidth: "24ch",
},

topDesc: {
  fontSize: "1rem",
  color: "var(--text-secondary)",
  marginBottom: "1.25rem",
  maxWidth: "48ch",
},

readMore: {
  fontWeight: 600,
  color: "#2563eb",
  width: "fit-content",
  borderBottom: "2px solid transparent",
},

topStoryImage: {
  borderRadius: "14px",
  overflow: "hidden",
  height: "330px",
  width: "100%",
  maxWidth: "560px",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.24)",
},

/* Mobile override (React-safe approach) */


topImg: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
},


  /* ================= HIGHLIGHTS ================= */
highlights: {
  margin: "2.5rem 0",
},

highlightsTitle: {
  fontSize: "1rem",
  fontWeight: 700,
  marginBottom: "1rem",
  color: "var(--text-primary)",
},

highlightList: {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "0.75rem 1.5rem",
},

highlightItem: {
  paddingLeft: "0.75rem",
  borderLeft: "3px solid #2563eb",
},

highlightLink: {
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "var(--text-primary)",
  textDecoration: "none",
  lineHeight: 1.4,
},

  /* ================= FEATURED ================= */
featured: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  marginBottom: "3rem",
},

featuredCard: {
  display: "flex",
  flexDirection: "column",
  textDecoration: "none",
},

featuredImageWrap: {
  height: "200px",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
},

featuredImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
},

featuredContent: {
  paddingTop: "0.75rem",
},

featuredTitle: {
  fontSize: "1.05rem",
  fontWeight: 600,
  lineHeight: 1.35,
  color: "var(--text-primary)",
  marginBottom: "0.3rem",
},

featuredRead: {
  fontSize: "0.85rem",
  fontWeight: 500,
  color: "#2563eb",
},

  /* ================= CATEGORIES ================= */
categories: {
  marginBottom: "3.5rem",
},

categoriesTitle: {
  fontSize: "1rem",
  fontWeight: 700,
  marginBottom: "1rem",
  color: "var(--text-primary)",
},

categoryGrid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "0.75rem 1.25rem",
},

categoryItem: {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.75rem 0",
  borderBottom: "1px solid var(--border)",
  textDecoration: "none",
},

categoryName: {
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "var(--text-primary)",
},

categoryArrow: {
  fontSize: "0.9rem",
  color: "var(--text-secondary)",
},

};
