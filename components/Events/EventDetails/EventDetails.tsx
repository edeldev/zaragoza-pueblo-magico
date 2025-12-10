"use client";
import { JSX, useState } from "react";
import { Breadcrumbs, SocialShareButtons } from "@/components/ui";
import { Details } from "./components";
import { IEventDetail } from "./components/types";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { MoreContent } from "@/components/MoreContent";
import { useMoreContent } from "@/hooks";
import { adaptContent } from "@/utils";

export const EventDetails = ({ eventId }: IEventDetail) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const shareUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/eventos/${eventId.slug}`;

  const { items } = useMoreContent("events", 3);

  const more =
    items.length > 0 ? adaptContent(items[0], "events").sectionTitle : null;

  return (
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

        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          {!isLoaded && (
            <div className="w-full h-auto aspect-square bg-neutral-200 animate-pulse absolute inset-0" />
          )}

          <img
            src={eventId.imageUrl}
            alt={eventId.title}
            className={`w-full h-auto object-cover transition-all aspect-square duration-700 hover:scale-[1.04] ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
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
                    className={styles[level] || "text-xl font-bold text-black"}
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
  );
};
