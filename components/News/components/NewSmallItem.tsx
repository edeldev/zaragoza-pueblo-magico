import Link from "next/link";
import { formatDate } from "@/utils";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { INew } from "./types";
import { ReadMore, ImageWithSkeleton } from "@/components/ui";

export const NewSmallItem = ({ newItem }: INew) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Link
        href={`/noticias/${newItem.slug}`}
        className="overflow-hidden rounded-lg flex-none"
      >
        <ImageWithSkeleton
          src={newItem.imageUrl[0]}
          alt={newItem.title}
          className="w-full h-72 md:w-[150px] lg:w-[200px] md:h-45 lg:h-40 object-cover shadow-sm hover:scale-110 aspect-square rounded-lg"
        />
      </Link>

      <div className="flex flex-col gap-1">
        <span className="text-text-date text-xs font-medium tracking-wide uppercase">
          {formatDate(newItem.date)}
        </span>

        <Link href={`noticias/${newItem.slug}`} className="w-fit">
          <h3 className="font-semibold text-lg leading-tight hover:text-black/50 transition-colors duration-300">
            {newItem.title}
          </h3>
        </Link>

        <BlocksRenderer
          content={newItem.resume as BlocksContent}
          blocks={{
            paragraph: ({ children }) => (
              <p className="text-gray-600 line-clamp-2 md:line-clamp-3">
                {children}
              </p>
            ),
          }}
        />

        <ReadMore page="noticias" slug={newItem.slug} />
      </div>
    </div>
  );
};
