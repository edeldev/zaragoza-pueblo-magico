import { TEvent } from "@/interface/event";
import { TNew } from "@/interface/news";

export const adaptContent = (item: TEvent | TNew, type: "events" | "news") => {
  const imageUrl =
    type === "events"
      ? item.imageUrl
      : Array.isArray(item.imageUrl)
      ? item.imageUrl[0]
      : item.imageUrl;

  return {
    slug: item.slug,
    title: item.title,
    date: item.date ?? null,
    imageUrl,
    resume: item.resume,
    href:
      type === "events" ? `/eventos/${item.slug}` : `/noticias/${item.slug}`,
    cta: type === "events" ? "Ver evento →" : "Leer noticia →",
    sectionTitle: type === "events" ? "Próximos eventos" : "Más noticias",
  };
};
