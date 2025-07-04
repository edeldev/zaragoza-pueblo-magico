import { IActivities } from "@/interface/activities";

export type TCategoryId = {
  categoryId: string;
};

export type TGetCategoryResponse = {
  activities: IActivities[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};
