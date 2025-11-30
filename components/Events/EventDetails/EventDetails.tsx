"use client";
import { useState } from "react";
import { SocialShareButtons } from "@/components/ui";
import { Breadcrumbs, Details, MoreEvents } from "./components";
import { IEventDetail } from "./components/types";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";

export const EventDetails = ({ eventId }: IEventDetail) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="container mx-auto px-4">
      <div className="space-y-10 max-w-4xl mx-auto">
        <Breadcrumbs eventId={eventId} />
        <Details eventId={eventId} />

        <div className="pt-4 border-t border-neutral-200">
          <p className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
            Compartir:
          </p>
          <SocialShareButtons title={eventId.title} />
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          {!isLoaded && (
            <div className="w-full h-90 md:h-[500px] bg-neutral-200 animate-pulse absolute inset-0" />
          )}

          <img
            src={eventId.imageUrl}
            alt={eventId.title}
            className={`w-full h-90 md:h-[500px] object-cover transition-all duration-700 hover:scale-[1.04] ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        <div className="prose prose-neutral max-w-none leading-relaxed">
          <BlocksRenderer
            content={eventId.content as BlocksContent}
            blocks={{
              paragraph: ({ children }) => (
                <p className="text-neutral-700 mb-5 text-lg">{children}</p>
              ),
            }}
          />
        </div>

        <div className="my-16 max-w-2xl mx-auto opacity-70">
          <div className="h-[1.2px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        </div>

        <MoreEvents />
      </div>
    </section>
  );
};
