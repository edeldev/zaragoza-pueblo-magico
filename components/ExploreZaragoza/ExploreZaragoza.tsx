"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  IconBuildingSkyscraper,
  IconConfettiFilled,
  IconFountainFilled,
  IconRoute,
  IconUser,
} from "@tabler/icons-react";
import { EXPLORE_ZARAGOZA } from "@/utils";
import { IIcons } from "@/interface/icon";

const Icons: IIcons = {
  IconRoute: IconRoute,
  IconFountainFilled: IconFountainFilled,
  IconConfettiFilled: IconConfettiFilled,
  IconBuildingSkyscraper: IconBuildingSkyscraper,
  IconUser: IconUser,
};

export const ExploreZaragoza = () => {
  const [selectedId, setSelectedId] = useState<number | null>(
    EXPLORE_ZARAGOZA[0].id
  );
  const itemRefs = useRef<Record<number, HTMLLIElement | null>>({});

  const handleSelect = (id: number) => {
    setSelectedId(id);
    const element = itemRefs.current[id];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <div className="bg-white shadow-2xl sticky top-[var(--header-height,130px)] z-99 transition-all duration-300">
      <ul className="flex justify-start md:justify-center items-center min-h-[100px] px-5 md:px-0 gap-5 md:gap-10 overflow-x-auto no-scrollbar">
        {EXPLORE_ZARAGOZA.map((explore) => {
          const isSelected = explore.id === selectedId;
          const IconComponent = Icons[explore.icon];
          return (
            <Link key={explore.id} href={explore.link}>
              <li
                ref={(el) => {
                  itemRefs.current[explore.id] = el;
                }}
                onClick={() => handleSelect(explore.id)}
              >
                <div className="text-black flex flex-col items-center gap-1 justify-center">
                  <div
                    className={`p-3 ${
                      isSelected ? "bg-explore-background border" : ""
                    } rounded-full`}
                  >
                    <IconComponent
                      className={`size-6 md:size-7 ${
                        isSelected ? "text-explore-text" : "text-black"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-xs md:text-base text-center ${
                      isSelected ? "text-explore-text" : "text-black"
                    }`}
                  >
                    {explore.text}
                  </span>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
