"use client";
import type { MouseEvent } from "react";
import { SHARED_PLATFORM } from "@/utils/sharedPlatform";
import { ISocialShareButton } from "./types";

export const SocialShareButtons = ({ shareUrl }: ISocialShareButton) => {
  const absoluteShareUrl = new URL(
    shareUrl,
    "https://www.generalzaragoza.mx"
  ).href;

  const handleShare = async (
    event: MouseEvent<HTMLAnchorElement>,
    name: string,
    fallbackUrl: string
  ) => {
    // Let the browser handle modified clicks and ordinary web share links.
    if (
      name !== "Facebook" ||
      event.button !== 0 ||
      event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
      !window.matchMedia("(pointer: coarse)").matches ||
      !navigator.share ||
      (navigator.canShare && !navigator.canShare({ url: absoluteShareUrl }))
    ) return;

    event.preventDefault();
    try {
      await navigator.share({ url: absoluteShareUrl });
    } catch (error) {
      // Closing the system share sheet is an intentional cancellation.
      if (error instanceof Error && error.name === "AbortError") return;
      window.location.assign(fallbackUrl);
    }
  };

  return (
    <ul className="flex justify-start items-center gap-4 mt-5">
      {SHARED_PLATFORM.map(({ name, color, Icon, url }) => (
        <li key={name} className="relative group">
          <a
            href={url(absoluteShareUrl)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => void handleShare(event, name, url(absoluteShareUrl))}
            className="relative w-[40px] h-[40px] cursor-pointer rounded-[20%] flex items-center justify-center overflow-hidden bg-white text-gray-700 hover:text-white transition-all duration-300"
            aria-label={name}
          >
            <div
              className="absolute bottom-0 left-0 w-full h-0 z-0 transition-all duration-300 group-hover:h-full"
              style={{ backgroundColor: color }}
            />
            <Icon className="w-6 h-6 z-10" />
          </a>
          <div
            className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-white text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ backgroundColor: color }}
          >
            {name}
          </div>
        </li>
      ))}
    </ul>
  );
};
