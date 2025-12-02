import { TNewDetail } from "@/interface/news";

export interface IDetail {
  newId: TNewDetail;
}

export interface IModalGallery {
  activeImage: string | null;
  setShowGallery: (showGallery: boolean) => void;
  images: string[];
  setActiveImage: (activeImage: string | null) => void;
}
