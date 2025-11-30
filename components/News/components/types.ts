import { TNew } from "@/interface/news";

export interface INew {
  newItem: TNew;
}

export interface IButtonNew {
  onClick: () => void;
  isPast: boolean;
}

export interface INewList {
  newList: TNew[];
  loading: boolean;
}

export interface IBannerNew {
  isPast: boolean;
}
