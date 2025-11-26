import { TActivities } from "./types";

export const ACTIVITIES: TActivities[] = [
  {
    id: 1,
    title: "Atractivos turísticos",
    section: "tourist-attractions",
    categoryId: "touristAttractive",
    link: `/turismo?tab=${encodeURIComponent("Atractivos turísticos")}`,
  },
  {
    id: 2,
    title: "Fiesta y eventos",
    section: "party",
    categoryId: "party",
    link: `/turismo?tab=${encodeURIComponent("Fiesta y eventos")}`,
  },
];
