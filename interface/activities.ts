import { BlocksContent } from "@strapi/blocks-react-renderer";
import { StaticImageData } from "next/image";

export type RawImage = {
  url: string;
};

export interface IActivities {
  slug: string;
  name: string;
  resume: string;
  description: BlocksContent;
  images: StaticImageData[];
  ubication: string;
  locationHref: string;
}

export type TActivities = {
  slug: string;
  name: string;
  resume: string;
  description: BlocksContent;
  images: RawImage[];
  ubication: string;
  locationHref: string;
};
