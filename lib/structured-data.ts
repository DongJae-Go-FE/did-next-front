const SITE_URL = "https://wyd2027did.org";
const SITE_NAME = "WYD 2027 SEOUL DID";

export type StructuredDataLocale = "kr" | "en";

export function createBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createArticleJsonLd({
  author,
  date,
  description,
  locale,
  title,
  url,
}: {
  author?: string;
  date: string;
  description: string;
  locale: StructuredDataLocale;
  title: string;
  url: string;
}) {
  const authorName = author?.trim();

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description,
    inLanguage: locale === "kr" ? "ko" : "en",
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: `${SITE_URL}/opengraph-image`,
    datePublished: date,
    dateModified: date,
    author: authorName
      ? {
          "@type": "Person",
          name: authorName,
        }
      : {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
