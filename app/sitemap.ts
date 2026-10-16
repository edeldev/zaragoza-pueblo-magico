import type { MetadataRoute } from "next";

const siteUrl = "https://www.generalzaragoza.mx";

export const revalidate = 3600;

type Publication = {
  slug: string;
  updatedAt?: string;
};

type PublicationsResponse = {
  data: Publication[];
  meta: { pagination: { pageCount: number } };
};

async function publicationEntries(
  collection: "news" | "events",
  route: "noticias" | "eventos"
): Promise<MetadataRoute.Sitemap> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) throw new Error("NEXT_PUBLIC_API_URL is required for the sitemap");

  const entries: MetadataRoute.Sitemap = [];
  let page = 1;
  let pageCount = 1;

  do {
    const url = new URL(`${apiUrl.replace(/\/$/, "")}/${collection}`);
    url.search = new URLSearchParams({
      "fields[0]": "slug",
      "fields[1]": "updatedAt",
      "filters[publishedAt][$notNull]": "true",
      "pagination[page]": String(page),
      "pagination[pageSize]": "100",
      sort: "id:asc",
    }).toString();

    const response = await fetch(url, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) {
      throw new Error(`Unable to generate ${collection} sitemap: ${response.status}`);
    }

    const result: PublicationsResponse = await response.json();
    pageCount = result.meta.pagination.pageCount;

    for (const publication of result.data) {
      if (!publication.slug?.trim()) continue;
      const updatedAt = publication.updatedAt
        ? new Date(publication.updatedAt)
        : undefined;

      entries.push({
        url: `${siteUrl}/${route}/${encodeURIComponent(publication.slug)}`,
        ...(updatedAt && !Number.isNaN(updatedAt.getTime())
          ? { lastModified: updatedAt }
          : {}),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
    page += 1;
  } while (page <= pageCount);

  return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [news, events] = await Promise.all([
    publicationEntries("news", "noticias"),
    publicationEntries("events", "eventos"),
  ]);

  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/noticias`, changeFrequency: "daily", priority: 0.8 },
    { url: `${siteUrl}/eventos`, changeFrequency: "daily", priority: 0.8 },
    { url: `${siteUrl}/turismo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/gobierno-municipal`, changeFrequency: "monthly", priority: 0.7 },
  ];

  return Array.from(
    new Map([...pages, ...news, ...events].map((entry) => [entry.url, entry])).values()
  );
}
