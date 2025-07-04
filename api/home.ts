import { ENV } from "@/utils";
import { query } from "./strapi";
import { TCategoryId } from "./types";
import { RawImage, TActivities } from "@/interface/activities";

export function getCategory({ categoryId }: TCategoryId) {
  let url = `activities?filters[activitiesCategory][slug][$contains]=${categoryId}&populate=*`;

  return query(url).then((res) => {
    const { data, meta } = res;

    const activities = data.map((activitie: TActivities) => {
      const {
        name,
        slug,
        resume,
        description,
        images: rawImages,
        ubication,
        locationHref,
      } = activitie;
      const images = rawImages.map(
        (img: RawImage) => `${ENV.SERVER_HOST}${img.url}`
      );

      return {
        name,
        slug,
        resume,
        description,
        images,
        ubication,
        locationHref,
      };
    });

    return { activities, pagination: meta.pagination };
  });
}
