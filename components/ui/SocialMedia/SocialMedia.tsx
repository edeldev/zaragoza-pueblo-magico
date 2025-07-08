import Link from "next/link";
import { SOCIAL_MEDIA } from "@/utils/socialMedia";
import { ISocialMedia } from "./types";

export const SocialMedia = ({ colorText }: ISocialMedia) => {
  return (
    <ul className="flex justify-start items-center gap-4">
      {SOCIAL_MEDIA.map(({ name, color, url, Icon }) => (
        <li key={name} className="relative group">
          <Link
            href={url}
            className={`relative w-[40px] h-[40px] cursor-pointer rounded-[20%] flex items-center justify-center overflow-hidden ${colorText} hover:text-white transition-all duration-300`}
            aria-label={name}
          >
            <div
              className="absolute bottom-0 left-0 w-full h-0 z-0 transition-all duration-300 group-hover:h-full"
              style={{ backgroundColor: color }}
            />
            <Icon className="w-6 h-6 z-10" />
          </Link>
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
