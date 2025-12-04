import { query } from "./strapi";
import { TGetNewResponse } from "./types";
import { resolveImageArray } from "@/utils";
import { TSlug } from "@/interface/slug";
import { TNew } from "@/interface/news";

export function getNews(page = 1, pageSize = 4): Promise<TGetNewResponse> {
  const today = new Date().toLocaleDateString("en-CA");

  const url = `news?populate=*&filters[date][$gte]=${today}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=date:asc`;

  return query(url).then((res) => {
    const { data, meta } = res;

    const news = data.map((n: TNew) => {
      const { title, slug, resume, date, images } = n;

      const imageUrl = resolveImageArray(images, 800);

      return { title, slug, resume, date, imageUrl };
    });

    return { news, pagination: meta?.pagination };
  });
}

export function getPastNews(page = 1, pageSize = 4): Promise<TGetNewResponse> {
  const today = new Date().toLocaleDateString("en-CA");

  const url = `news?populate=*&filters[date][$lt]=${today}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=date:asc`;

  return query(url).then((res) => {
    const { data, meta } = res;

    const news = data.map((n: TNew) => {
      const { title, slug, resume, date, images } = n;

      const imageUrl = resolveImageArray(images, 800);

      return { title, slug, resume, date, imageUrl };
    });

    return { news, pagination: meta?.pagination };
  });
}

export function getNewId({ slug }: TSlug) {
  return query(`news?filters[slug][$eq]=${slug}&populate=*`).then((res) => {
    const { data, meta } = res;

    const newId = data.map((n: TNew) => {
      const { title, slug, content, contentTwo, date, images, video } = n;

      const imageUrl = resolveImageArray(images, 800);

      return { title, slug, content, contentTwo, date, imageUrl, video };
    });

    return { newId, pagination: meta?.pagination };
  });
}
