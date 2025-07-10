"use client";
import { BusinessByCommerce } from "@/components/ui";
import { AnimatePresence, motion } from "framer-motion";
import { IResultBusines } from "./types";

export const ResultBusiness = ({ selectBusinesSlug }: IResultBusines) => {
  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectBusinesSlug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="col-span-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            <BusinessByCommerce slug={selectBusinesSlug} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
