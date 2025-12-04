import { BlocksContent } from "@strapi/blocks-react-renderer";

export type RawImage = {
  url: string;
};

export interface IActivities {
  slug: string;
  name: string;
  resume: string;
  description: BlocksContent;
  images: string[];
  ubication: string;
  locationHref: string;
  webSite?: string;
  facebook?: string;
  instagram?: string;
}

export type TActivities = {
  slug: string;
  name: string;
  resume: string;
  description: BlocksContent;
  images: RawImage[];
  ubication: string;
  locationHref: string;
  webSite?: string;
  facebook?: string;
  instagram?: string;
};
