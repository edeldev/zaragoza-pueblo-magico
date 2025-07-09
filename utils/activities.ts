import { TActivities } from "./types";

export const ACTIVITIES: TActivities[] = [
  {
    id: 1,
    title: "Atractivos turísticos",
    section: "tourist-attractions",
    categoryId: "touristAttractive",
    link: "/turismo?tab=Atractivos+turísticos",
  },
  {
    id: 2,
    title: "Fiesta y eventos",
    section: "party",
    categoryId: "party",
    link: "/turismo?tab=Fiesta+y+eventos",
  },
  {
    id: 3,
    title: "Hoteles y restaurantes",
    section: "hotels",
    categoryId: "hotels",
    link: "/turismo?tab=Hoteles+y+restaurantes",
  },
];
