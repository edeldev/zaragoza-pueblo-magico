import { BlocksContent } from "@strapi/blocks-react-renderer";

export type RawImage = {
  url: string;
};

export type TNew = {
  title: string;
  slug: string;
  resume: BlocksContent;
  content: BlocksContent;
  contentTwo: BlocksContent;
  date: string;
  images: RawImage[];
  imageUrl: string;
  video: string;
};
export type TNewDetail = {
  title: string;
  slug: string;
  resume: BlocksContent;
  content: BlocksContent;
  contentTwo: BlocksContent;
  date: string;
  images: RawImage[];
  imageUrl: string[];
  video: string;
};
