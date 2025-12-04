import { TEvent } from "@/interface/event";
import { query } from "./strapi";
import { TGetEventResponse } from "./types";
import { resolveImageUrl } from "@/utils";
import { TSlug } from "@/interface/slug";

export function getEvents(page = 1, pageSize = 4): Promise<TGetEventResponse> {
  const today = new Date().toLocaleDateString("en-CA");

  const url = `events?populate=image&filters[date][$gte]=${today}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=date:asc`;

  return query(url).then((res) => {
    const { data, meta } = res;

    const events = data.map((event: TEvent) => {
      const { title, slug, resume, date, image } = event;

      return {
        title,
        slug,
        resume,
        date,
        imageUrl: resolveImageUrl(image?.url),
      };
    });

    return { events, pagination: meta?.pagination };
  });
}

export function getPastEvents(
  page = 1,
  pageSize = 4
): Promise<TGetEventResponse> {
  const today = new Date().toLocaleDateString("en-CA");

  const url = `events?populate=image&filters[date][$lt]=${today}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=date:asc`;

  return query(url).then((res) => {
    const { data, meta } = res;

    const events = data.map((event: TEvent) => {
      const { title, slug, resume, date, image } = event;

      return {
        title,
        slug,
        resume,
        date,
        imageUrl: resolveImageUrl(image?.url),
      };
    });

    return { events, pagination: meta?.pagination };
  });
}

export function getEventId({ slug }: TSlug) {
  return query(`events?filters[slug][$eq]=${slug}&populate=image`).then(
    (res) => {
      const { data, meta } = res;

      const eventId = data.map((event: TEvent) => {
        const { title, slug, content, date, time, location, image } = event;

        return {
          title,
          slug,
          content,
          date,
          time,
          location,
          imageUrl: resolveImageUrl(image?.url),
        };
      });

      return { eventId, pagination: meta?.pagination };
    }
  );
}
