import { TEvent } from "@/interface/event";
import { TNewDetail } from "@/interface/news";

export interface IBreadcrumb {
  text: string;
  breadcrumb: TEvent | TNewDetail;
}
