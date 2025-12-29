import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

export default function SEO({
  title,
  description,
  url = "https://viralbargarh.com",
  image = "/src/assets/news/placeholder.jpg",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
