import Link from "next/link";
import { ImageWithSkeleton } from "./ImageWithSkeleton";
import { formatDate } from "@/utils";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { IEvent } from "./types";
import { ReadMore } from "./ReadMore";

export const EventMainItem = ({ event }: IEvent) => {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href={`eventos/${event.slug}`}
        className="overflow-hidden rounded-lg"
      >
        <ImageWithSkeleton
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-72 object-cover shadow-sm hover:scale-110 aspect-square rounded-lg"
        />
      </Link>

      <span className="text-text-date text-sm font-medium">
        {formatDate(event.date)}
      </span>

      <Link href={`eventos/${event.slug}`} className="w-fit">
        <h3 className="font-semibold text-2xl leading-tight hover:text-black/50 transition-colors duration-300">
          {event.title}
        </h3>
      </Link>

      <BlocksRenderer
        content={event.resume as BlocksContent}
        blocks={{
          paragraph: ({ children }) => (
            <p className="text-gray-600">{children}</p>
          ),
        }}
      />

      <ReadMore slug={event.slug} />
    </div>
  );
};
