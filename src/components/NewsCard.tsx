import { useNavigate } from "react-router-dom";

type NewsCardProps = {
  title: string;
  summary?: string;
  category?: string;
  articleId?: string;
  image?: string;
};

export default function NewsCard({
  title,
  summary,
  category,
  articleId,
  image,
}: NewsCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (articleId) navigate(`/article/${articleId}`);
  };

  return (
    <article
  className="news-card"
  style={styles.card}
  onClick={handleClick}
>

      {/* Image */}
      <div style={styles.imageWrap}>
        <img
          src={image || "/src/assets/news/placeholder.jpg"}
          alt={title}
          style={styles.image}
        />
      </div>

      {/* Content */}
      <div style={styles.content}>
        {category && <span style={styles.category}>{category}</span>}
        <h3 style={styles.title}>{title}</h3>
        {summary && <p style={styles.summary}>{summary}</p>}
      </div>
    </article>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: "#ffffff",
    borderRadius: "14px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },

  imageWrap: {
    width: "100%",
    height: "160px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },

  content: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },

  category: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#1d4ed8",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.35,
  },

  summary: {
    fontSize: "0.9rem",
    color: "#4b5563",
    lineHeight: 1.5,
  },
};
