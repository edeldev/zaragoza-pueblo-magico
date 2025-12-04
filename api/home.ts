import { ENV, optimizeCloudinary } from "@/utils";
import { query } from "./strapi";
import {
  TGetBusinessesBySubcategory,
  TGetBusinessesBySubcategoryHome,
  TGetBusinessesBySubcategoryResponse,
  TGetCategory,
  TGetCategoryResponse,
} from "./types";
import { RawImage, TActivities } from "@/interface/activities";
import { TBusines } from "@/interface/business";

export function getCategory({
  categoryId,
  limit,
}: TGetCategory): Promise<TGetCategoryResponse> {
  let url = `activities?filters[activitiesCategory][slug][$contains]=${categoryId}&populate=*`;

  if (limit) {
    url += `&pagination[limit]=${limit}`;
  }

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
        webSite,
        facebook,
        instagram,
      } = activitie;
      const images = rawImages.map((img: RawImage) => {
        if (!img?.url) return "";

        const url = img.url.startsWith("http")
          ? img.url
          : `${ENV.SERVER_HOST}${img.url}`;

        return optimizeCloudinary(url, 750);
      });

      return {
        name,
        slug,
        resume,
        description,
        images,
        ubication,
        locationHref,
        webSite,
        facebook,
        instagram,
      };
    });

    return { activities, pagination: meta.pagination };
  });
}

export function getBusinessesBySubcategory({
  slug,
}: TGetBusinessesBySubcategory): Promise<TGetBusinessesBySubcategoryResponse> {
  let url = `businesses?filters[commerceType][slug][$eq]=${slug}&populate=*`;

  return query(url).then((res) => {
    const { data, meta } = res;

    const business = data.map((busines: TBusines) => {
      const {
        name,
        slug,
        commerceType: { name: nameCommerce },
        phone,
        service,
        schedule,
        ubication,
        icon,
        ubicationMap,
        socialMedia,
        web,
      } = busines;

      return {
        name,
        slug,
        nameCommerce,
        phone,
        service,
        schedule,
        ubication,
        icon,
        ubicationMap,
        socialMedia,
        web,
      };
    });

    return { business, pagination: meta?.pagination };
  });
}

export function getBusinessesBySubcategoryHome({
  slug,
  pageSize,
  page,
}: TGetBusinessesBySubcategoryHome): Promise<TGetBusinessesBySubcategoryResponse> {
  let url = `businesses?filters[commerceType][slug][$eq]=${slug}&populate=*`;

  if (page) url += `&pagination[page]=${page}`;
  if (pageSize) url += `&pagination[pageSize]=${pageSize}`;

  return query(url).then((res) => {
    const { data, meta } = res;

    const business = data.map((busines: TBusines) => {
      const {
        name,
        slug,
        commerceType: { name: nameCommerce },
        phone,
        service,
        schedule,
        ubication,
        icon,
        ubicationMap,
        socialMedia,
        web,
      } = busines;

      return {
        name,
        slug,
        nameCommerce,
        phone,
        service,
        schedule,
        ubication,
        icon,
        ubicationMap,
        socialMedia,
        web,
      };
    });

    return { business, pagination: meta?.pagination };
  });
}
