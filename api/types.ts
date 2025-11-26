import { IActivities } from "@/interface/activities";
import { TBusines } from "@/interface/business";

export type TGetCategory = {
  categoryId: string;
  limit?: number;
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

export type TGetBusinessesBySubcategoryHome = {
  slug: string;
  pageSize: number;
  page: number;
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
