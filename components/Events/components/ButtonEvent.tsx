import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { IButtonEvent } from "./types";

export const ButtonEvent = ({ onClick, isPast }: IButtonEvent) => {
  return (
    <div className="flex justify-end">
      <motion.button
        onClick={onClick}
        type="button"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center items-center gap-2 bg-secondary py-2 px-5 text-white rounded-lg cursor-pointer hover:bg-secondary/80 transition-colors duration-300"
      >
        {!isPast && <IconArrowNarrowLeft stroke={1.5} />}
        {isPast ? "Ver eventos próximos" : "Ver eventos pasados"}
        {isPast && <IconArrowNarrowRight stroke={1.5} />}
      </motion.button>
    </div>
  );
};
