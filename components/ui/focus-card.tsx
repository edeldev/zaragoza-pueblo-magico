"use client";

import React, { useState } from "react";
import { cn } from "@/utils";
import { IActivities } from "@/interface/activities";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    open,
  }: {
    card: IActivities;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    open: (card: IActivities) => void;
  }) => {
    const [loading, setLoading] = useState(true);

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => open(card)}
        className={cn(
          "cursor-pointer rounded-lg relative bg-gray-100 overflow-hidden h-60 md:h-70 w-full transition-all duration-300 ease-out group",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        {loading && (
          <div className="absolute inset-0 w-full h-full animate-pulse bg-gray-300" />
        )}

        <img
          src={card.images[0]}
          alt={card.name}
          className={cn(
            "object-cover absolute inset-0 w-full h-full transition-opacity duration-300",
            loading ? "opacity-0" : "opacity-100"
          )}
          onLoad={() => setLoading(false)}
        />

        <div
          className={cn(
            "absolute inset-0 flex items-end py-8 px-4 transition-opacity duration-300",
            "opacity-100",
            "lg:opacity-0 lg:group-hover:opacity-100 lg:bg-black/50"
          )}
        >
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>

          <div className="relative z-10 capitalize text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.name}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({
  cards,
  open,
}: {
  cards: IActivities[];
  open: (card: IActivities) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {cards.map((card, index) => (
        <Card
          key={card.slug}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          open={open}
        />
      ))}
    </div>
  );
}
