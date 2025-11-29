"use client";
import { getEvents } from "@/api/event";
import { TEvent } from "@/interface/event";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { formatDate } from "@/utils";

export const MoreEvents = () => {
  const [moreEvent, setMoreEvent] = useState<TEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>(
    {}
  );

  const params = useParams();
  const currentSlug = params?.slug;

  useEffect(() => {
    getEvents()
      .then((res) => {
        const filtered = res.events.filter((e) => e.slug !== currentSlug);
        setMoreEvent(filtered);
      })
      .catch((err) => {
        console.error(err.message);
        setMoreEvent([]);
      })
      .finally(() => setLoading(false));
  }, [currentSlug]);

  const handleImageLoad = (slug: string) => {
    setImageLoaded((prev) => ({ ...prev, [slug]: true }));
  };

  return (
    <div className="mt-10">
      {moreEvent.length > 0 && (
        <h3 className="text-center text-3xl font-semibold tracking-tight mb-8">
          Próximos eventos
        </h3>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden bg-gray-200 animate-pulse h-72"
            ></div>
          ))}

        {!loading &&
          moreEvent.map((more) => (
            <Link
              href={`/eventos/${more.slug}`}
              key={more.slug}
              className="rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col h-full"
            >
              <div className="relative w-full h-48 overflow-hidden">
                {!imageLoaded[more.slug] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
                <img
                  src={more.imageUrl}
                  alt={more.title}
                  onLoad={() => handleImageLoad(more.slug)}
                  className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                    imageLoaded[more.slug] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs tracking-wide text-gray-500 uppercase pb-2">
                  {formatDate(more.date)}
                </span>

                <h4 className="text-lg font-semibold line-clamp-2 mb-1">
                  {more.title}
                </h4>

                <BlocksRenderer
                  content={more.resume as BlocksContent}
                  blocks={{
                    paragraph: ({ children }) => (
                      <p className="text-text-date line-clamp-2 md:line-clamp-3 mb-5">
                        {children}
                      </p>
                    ),
                  }}
                />

                <button
                  type="button"
                  className="mt-auto w-full py-2.5 rounded-lg bg-black text-white text-sm font-medium cursor-pointer text-center shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Ver evento →
                </button>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
