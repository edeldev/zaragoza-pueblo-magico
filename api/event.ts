import { TEvent } from "@/interface/event";
import { query } from "./strapi";
import { TGetEventResponse } from "./types";
import { ENV } from "@/utils";

export function getEvents(): Promise<TGetEventResponse> {
  let url = `events?populate=image&pagination[limit]=4&sort=date:desc`;

  return query(url).then((res) => {
    const { data, meta } = res;

    const events = data.map((event: TEvent) => {
      const { title, slug, resume, content, date, time, location, image } =
        event;

      const imageUrl = `${ENV.SERVER_HOST}${image.url}`;

      return {
        title,
        slug,
        resume,
        content,
        date,
        time,
        location,
        imageUrl,
      };
    });

    return { events, pagination: meta?.pagination };
  });
}
