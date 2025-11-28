import { BlocksContent } from "@strapi/blocks-react-renderer";

export type TEvent = {
  title: string;
  slug: string;
  resume: BlocksContent;
  content: BlocksContent;
  date: string;
  time: string;
  location: string;
  image: {
    url: string;
  };
  imageUrl: string;
};
