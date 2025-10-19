"use client";
import { useEffect, useRef, useState } from "react";
import {
  IconBuildingSkyscraper,
  IconCashRegister,
  IconConfettiFilled,
  IconFountainFilled,
  IconRoute,
} from "@tabler/icons-react";
import { EXPLORE_ZARAGOZA } from "@/utils";
import { IIcons } from "@/interface/icon";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Icons: IIcons = {
  IconRoute,
  IconFountainFilled,
  IconConfettiFilled,
  IconBuildingSkyscraper,
  IconCashRegister,
};

export const ExploreZaragoza = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isScrollingByClick = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const clickedId = useRef<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedId(id);
    clickedId.current = id;
    isScrollingByClick.current = true;

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isScrollingByClick.current = false;
      clickedId.current = null;
    }, 1000);
  };

  useEffect(() => {
    const OFFSET = 184;
    const sections = EXPLORE_ZARAGOZA.map((explore) => {
      const id = explore.link.replace("#", "");
      const element = document.getElementById(id);
      return element ? { id: explore.id, el: element } : null;
    }).filter(Boolean) as { id: number; el: HTMLElement }[];

    const updateActiveSection = () => {
      if (isScrollingByClick.current && clickedId.current !== null) {
        setSelectedId(clickedId.current);
        return;
      }

      let foundId: number | null = null;
      for (const { id, el } of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= OFFSET && rect.bottom > OFFSET) {
          foundId = id;
          break;
        }
      }
      setSelectedId(foundId);
    };

    const trigger = ScrollTrigger.create({
      start: 0,
      end: document.body.scrollHeight,
      onUpdate: updateActiveSection,
    });

    updateActiveSection();

    return () => {
      trigger.kill();
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (selectedId !== null) {
      const selectedElement = document.querySelector(
        `[data-id='${selectedId}']`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [selectedId]);

  return (
    <div className="bg-white shadow-2xl sticky top-[var(--header-height,120px)] z-99 transition-all duration-300">
      <ul className="flex justify-start xs:justify-center items-center min-h-[100px] px-5 md:px-0 gap-5 md:gap-10 overflow-x-auto no-scrollbar">
        {EXPLORE_ZARAGOZA.map((explore) => {
          const isSelected = explore.id === selectedId;
          const IconComponent = Icons[explore.icon];
          return (
            <li key={explore.id} data-id={explore.id}>
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
                    className={`text-xs md:text-base text-center whitespace-nowrap ${
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
