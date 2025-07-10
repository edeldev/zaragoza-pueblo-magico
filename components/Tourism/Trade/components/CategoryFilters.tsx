"use client";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS } from "@/utils";
import { ICategoryFilter } from "./types";

export const CategoryFilters = ({
  selectBusinesSlug,
  setSelectBusinesSlug,
}: ICategoryFilter) => {
  return (
    <ul className="hidden md:block col-span-12 md:col-span-3 space-y-2">
      {BUSINESS.map((busines) => {
        const isSelect = selectBusinesSlug === busines.id;
        return (
          <li
            key={busines.id}
            className="relative cursor-pointer"
            onClick={() => setSelectBusinesSlug(busines.id)}
          >
            <AnimatePresence>
              {isSelect && (
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 text-pink-500"
                >
                  {">"}
                </motion.span>
              )}
            </AnimatePresence>
            <a
              className={`capitalize ${
                isSelect
                  ? "text-pink-500 font-semibold"
                  : "text-gray-500 hover:text-black transition-colors duration-300"
              }`}
            >
              {busines.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
