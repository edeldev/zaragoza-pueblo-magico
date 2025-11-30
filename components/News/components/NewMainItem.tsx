import Link from "next/link";
import { formatDate } from "@/utils";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { INew } from "./types";
import { ReadMore, ImageWithSkeleton } from "@/components/ui";

export const NewMainItem = ({ newItem }: INew) => {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href={`noticias/${newItem.slug}`}
        className="overflow-hidden rounded-lg"
      >
        <ImageWithSkeleton
          src={newItem.imageUrl[0]}
          alt={newItem.title}
          className="w-full h-72 object-cover shadow-sm hover:scale-110 aspect-square rounded-lg"
        />
      </Link>

      <span className="text-text-date text-xs font-medium tracking-wide uppercase">
        {formatDate(newItem.date)}
      </span>

      <Link href={`noticias/${newItem.slug}`} className="w-fit">
        <h3 className="font-semibold text-2xl leading-tight hover:text-black/50 transition-colors duration-300">
          {newItem.title}
        </h3>
      </Link>

      <BlocksRenderer
        content={newItem.resume as BlocksContent}
        blocks={{
          paragraph: ({ children }) => (
            <p className="text-gray-600">{children}</p>
          ),
        }}
      />

      <ReadMore page="noticias" slug={newItem.slug} />
    </div>
  );
};
