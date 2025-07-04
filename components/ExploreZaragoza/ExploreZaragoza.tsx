"use client";
import { useEffect, useRef, useState } from "react";
import {
  IconBuildingSkyscraper,
  IconConfettiFilled,
  IconFountainFilled,
  IconRoute,
  IconUser,
} from "@tabler/icons-react";
import { EXPLORE_ZARAGOZA } from "@/utils";
import { IIcons } from "@/interface/icon";
import { IExploreZaragoza } from "./types";
import Link from "next/link";

const Icons: IIcons = {
  IconRoute: IconRoute,
  IconFountainFilled: IconFountainFilled,
  IconConfettiFilled: IconConfettiFilled,
  IconBuildingSkyscraper: IconBuildingSkyscraper,
  IconUser: IconUser,
};

export const ExploreZaragoza = ({ activeSection }: IExploreZaragoza) => {
  const [selectedId, setSelectedId] = useState<number | null>(activeSection);
  const itemRefs = useRef<Record<number, HTMLLIElement | null>>({});

  useEffect(() => {
    setSelectedId(activeSection);
  }, [activeSection]);

  const handleSelect = (id: number) => {
    if (id === selectedId) return;
    setSelectedId(id);

    const target = document.querySelector(
      EXPLORE_ZARAGOZA.find((x) => x.id === id)?.link || ""
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white shadow-2xl sticky top-[var(--header-height,130px)] z-99 transition-all duration-300">
      <ul className="flex justify-start md:justify-center items-center min-h-[100px] px-5 md:px-0 gap-5 md:gap-10 overflow-x-auto no-scrollbar">
        {EXPLORE_ZARAGOZA.map((explore) => {
          const isSelected = explore.id === selectedId;
          const IconComponent = Icons[explore.icon];
          return (
            <li
              key={explore.id}
              ref={(el) => {
                itemRefs.current[explore.id] = el;
              }}
            >
              <Link
                href={explore.link}
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
