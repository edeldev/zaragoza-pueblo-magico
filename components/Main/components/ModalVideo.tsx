"use client";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { IModalVideo } from "./types";

export const ModalVideo = ({ isModalOpen, closeModal }: IModalVideo) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0b0b22] to-black flex items-center justify-center z-99 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="rounded-lg sm:max-w-xl md:max-w-3xl lg:max-w-6xl w-full relative flex flex-wrap md:flex-nowrap gap-5 px-5 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-auto aspect-video order-2 md:order-1 rounded-lg md:rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/M5IAJWqLNCc?si=8RKkffyklpe8-LxJ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full rounded-lg md:rounded-2xl"
              />
            </div>

            <div
              className="bg-[#36364e] hover:bg-[#36364e]/80 transition-colors duration-300 self-start rounded-full p-2 cursor-pointer order-1 md:order-2 ml-auto"
              onClick={closeModal}
            >
              <IconX className="text-pink-400" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
