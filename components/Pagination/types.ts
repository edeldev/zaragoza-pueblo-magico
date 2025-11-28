import { TPagination } from "@/interface/pagination";

export interface IPagination {
  page: number;
  pagination: TPagination;
  setPage: (page: number) => void;
  updateURL: (page: number) => void;
}
