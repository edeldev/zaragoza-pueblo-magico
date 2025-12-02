"use client";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { adaptContent, formatDate } from "@/utils";
import { useMoreContent } from "@/hooks/useMoreContent";

type Props = {
  type: "events" | "news";
};

export const MoreContent = ({ type }: Props) => {
  const { items, loading, imageLoaded, handleImageLoad } = useMoreContent(
    type,
    3
  );

  const sectionTitle =
    items.length > 0 ? adaptContent(items[0], type).sectionTitle : null;

  return (
    <>
      {sectionTitle && (
        <div className="mt-10">
          <h3 className="text-center text-3xl font-semibold tracking-tight mb-8">
            {sectionTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {loading &&
              Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden bg-gray-200 animate-pulse h-72"
                ></div>
              ))}

            {!loading &&
              items.map((raw) => {
                const item = adaptContent(raw, type);

                return (
                  <Link
                    href={item.href}
                    key={item.slug}
                    className="rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col h-full"
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      {!imageLoaded[item.slug] && (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                      )}

                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        onLoad={() => handleImageLoad(item.slug)}
                        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                          imageLoaded[item.slug] ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      {item.date && (
                        <span className="text-xs tracking-wide text-gray-500 uppercase pb-2">
                          {formatDate(item.date)}
                        </span>
                      )}

                      <h4 className="text-lg font-semibold line-clamp-2 mb-1">
                        {item.title}
                      </h4>

                      {item.resume && (
                        <BlocksRenderer
                          content={item.resume as BlocksContent}
                          blocks={{
                            paragraph: ({ children }) => (
                              <p className="text-text-date line-clamp-2 md:line-clamp-3 mb-5">
                                {children}
                              </p>
                            ),
                          }}
                        />
                      )}

                      <button
                        type="button"
                        className="mt-auto w-full py-2.5 rounded-lg bg-black text-white text-sm font-medium cursor-pointer text-center shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300"
                      >
                        {item.cta}
                      </button>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
