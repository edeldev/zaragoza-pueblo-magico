import type { Metadata } from "next";

type TextNode = {
  text?: string;
  children?: readonly TextNode[];
};

function plainText(nodes: readonly TextNode[]): string {
  return nodes
    .map((node) => node.text ?? plainText(node.children ?? []))
    .join("");
}

export function getShareMetadata({
  title,
  path,
  image,
  content,
  fallbackDescription,
}: {
  title: string;
  path: string;
  image?: string;
  content?: readonly TextNode[];
  fallbackDescription: string;
}): Metadata {
  const text = (content ?? [])
    .map((block) => plainText([block]))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  const description = text ? text.slice(0, 200) : fallbackDescription;
  const imageUrl = image || "/zaragoza.webp";

  return {
    title: `${title} | Zaragoza, Nuevo León`,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_MX",
      siteName: "Gobierno de General Zaragoza, Nuevo León",
      title,
      description,
      url: path,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
