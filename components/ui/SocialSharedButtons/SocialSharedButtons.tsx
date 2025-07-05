"use client";
import { useEffect, useState } from "react";
import { SHARED_PLATFORM } from "@/utils/sharedPlatform";
import { ISocialShareButton } from "./types";

export const SocialShareButtons = ({ title }: ISocialShareButton) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleShare = (name: string) => {
    const platform = SHARED_PLATFORM.find((p) => p.name === name);
    const url = platform?.url(title);
    if (url) window.open(url, "_blank");
  };

  return (
    <ul className="flex justify-start items-center gap-4 mt-5">
      {SHARED_PLATFORM.map(({ name, color, Icon }) => (
        <li key={name} className="relative group">
          <button
            onClick={() => handleShare(name)}
            className="relative w-[40px] h-[40px] cursor-pointer rounded-[20%] flex items-center justify-center overflow-hidden bg-white text-gray-700 hover:text-white transition-all duration-300"
            aria-label={name}
          >
            <div
              className="absolute bottom-0 left-0 w-full h-0 z-0 transition-all duration-300 group-hover:h-full"
              style={{ backgroundColor: color }}
            />
            <Icon className="w-6 h-6 z-10" />
          </button>
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
