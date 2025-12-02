"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getEvents } from "@/api/event";
import { getNews } from "@/api/news";
import { TEvent } from "@/interface/event";
import { TNew } from "@/interface/news";

export const useMoreContent = (
  type: "events" | "news",
  pageSize: number = 3
) => {
  const [items, setItems] = useState<(TEvent | TNew)[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});
  const params = useParams();
  const currentSlug = params?.slug;

  const fetcher = {
    events: async () => (await getEvents(1, pageSize + 1)).events,
    news: async () => (await getNews(1, pageSize + 1)).news,
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetcher[type]();

        const filtered = data
          .filter((e) => e.slug !== currentSlug)
          .slice(0, pageSize);

        setItems(filtered);
      } catch (err) {
        console.error(err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [type, currentSlug, pageSize]);

  const handleImageLoad = (slug: string) =>
    setImageLoaded((prev) => ({ ...prev, [slug]: true }));

  return { items, loading, imageLoaded, handleImageLoad };
};
