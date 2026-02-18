"use client";
import { JSX, useState } from "react";
import { Breadcrumbs, SocialShareButtons } from "@/components/ui";
import { Details } from "./components";
import { IEventDetail } from "./components/types";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { MoreContent } from "@/components/MoreContent";
import { useLockBodyScroll, useMoreContent } from "@/hooks";
import { adaptContent } from "@/utils";

export const EventDetails = ({ eventId }: IEventDetail) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);

  const shareUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/eventos/${eventId.slug}`;
  const { items } = useMoreContent("events", 3);

  const more =
    items.length > 0 ? adaptContent(items[0], "events").sectionTitle : null;

  useLockBodyScroll(isPreviewOpen);

  return (
    <>
      <section className="container mx-auto px-4">
        <div className="space-y-10 max-w-4xl mx-auto">
          <Breadcrumbs text="eventos" breadcrumb={eventId} />
          <Details eventId={eventId} />

          <div className="pt-4 border-t border-neutral-200">
            <p className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
              Compartir:
            </p>
            <SocialShareButtons shareUrl={shareUrl} />
          </div>

          <div
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => {
              setIsPreviewOpen(true);
              setPreviewLoading(true);
            }}
          >
            {!isLoaded && (
              <div className="w-full h-auto aspect-square bg-neutral-200 animate-pulse absolute inset-0" />
            )}

            <img
              src={eventId.imageUrl}
              alt={eventId.title}
              className={`w-full h-auto object-cover aspect-square transition-all duration-700 group-hover:scale-105 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 text-center px-4">
                Da click para ver mejor la imagen
              </p>

              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs md:hidden bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                Toca para ampliar
              </p>
            </div>
          </div>

          <div className="prose prose-neutral max-w-none leading-relaxed">
            <BlocksRenderer
              content={eventId.content as BlocksContent}
              blocks={{
                heading: ({ children, level }) => {
                  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

                  const styles: Record<number, string> = {
                    3: "text-lg md:text-xl font-semibold text-gray-800 mb-2",
                  };

                  return (
                    <Tag
                      className={
                        styles[level] || "text-xl font-bold text-black"
                      }
                    >
                      {children}
                    </Tag>
                  );
                },

                paragraph: ({ children }) => (
                  <p className="mb-5 text-neutral-700 text-lg">{children}</p>
                ),

                list: ({ children }) => (
                  <ul className="list-disc pl-3 space-y-3">{children}</ul>
                ),

                "list-item": ({ children }) => (
                  <li className="text-neutral-700 text-lg">{children}</li>
                ),
              }}
            />
          </div>

          <div
            className={`${more ? "my-16" : "my-0"} max-w-2xl mx-auto opacity-70`}
          >
            <div className="h-[1.2px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>

          <MoreContent type="events" />
        </div>
      </section>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsPreviewOpen(false)}
            className="fixed top-4 right-6 md:right-8 text-white text-3xl hover:scale-110 transition duration-200 cursor-pointer z-[1000]"
          >
            ✕
          </button>

          <div
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {previewLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}

            <img
              src={eventId.imageUrl}
              alt={eventId.title}
              onLoad={() => setPreviewLoading(false)}
              className={`w-full max-h-[85vh] object-contain transition-opacity duration-500 ${
                previewLoading ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
};
