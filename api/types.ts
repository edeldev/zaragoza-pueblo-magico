import { IActivities } from "@/interface/activities";
import { TBusines } from "@/interface/business";

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

export type TGetBusinessesBySubcategory = {
  slug: string;
};

export type TGetBusinessesBySubcategoryResponse = {
  business: TBusines[];
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};
