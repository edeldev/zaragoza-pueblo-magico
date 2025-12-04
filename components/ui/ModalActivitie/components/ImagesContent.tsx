"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IImageContent } from "./types";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export const ImagesContent = ({ selectActivitie }: IImageContent) => {
  const [page, setPage] = useState(0);
  const [loadingImg, setLoadingImg] = useState(true);

  const images = selectActivitie.images;

  const canGoBack = page > 0;
  const canGoNext = page < images.length - 1;

  const paginate = (direction: number) => {
    const nextPage = page + direction;
    if (nextPage >= 0 && nextPage < images.length) {
      setPage(nextPage);
      setLoadingImg(true);
    }
  };

  return (
    <div className="relative">
      <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-xl">
        {loadingImg && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>
        )}

        <AnimatePresence initial={false} custom={page}>
          <motion.img
            key={page}
            src={images[page]}
            alt={selectActivitie.resume}
            custom={page}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            onLoad={() => setLoadingImg(false)}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full object-cover rounded-xl"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <div className="absolute inset-y-0 left-2 flex items-center z-10">
              <button
                onClick={() => paginate(-1)}
                disabled={!canGoBack}
                className={`p-2 rounded-full shadow transition ${
                  canGoBack
                    ? "bg-white/80 hover:bg-white cursor-pointer"
                    : "bg-gray-200 cursor-not-allowed"
                }`}
              >
                <IconChevronLeft size={20} className="text-black" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-2 flex items-center z-10">
              <button
                onClick={() => paginate(1)}
                disabled={!canGoNext}
                className={`p-2 rounded-full shadow transition ${
                  canGoNext
                    ? "bg-white/80 hover:bg-white cursor-pointer"
                    : "bg-gray-200 cursor-not-allowed"
                }`}
              >
                <IconChevronRight size={20} className="text-black" />
              </button>
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-1 mt-3">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === page ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      <div className="space-y-1 mt-6">
        <p className="text-lg font-semibold">Ubicación</p>
        <span>{selectActivitie.ubication}</span>
        <div className="flex justify-end mt-2">
          <Link
            href={selectActivitie.locationHref}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-primary rounded-md text-white hover:bg-primary/90 transition"
          >
            Ver en el mapa
          </Link>
        </div>

        {(selectActivitie.facebook || selectActivitie.instagram) && (
          <div>
            <div className="mt-10 mb-6 max-w-2xl mx-auto opacity-70">
              <div className="h-[1.2px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            </div>

            <span>Redes sociales</span>

            <div className="flex gap-3 mt-3">
              {selectActivitie.facebook && (
                <Link
                  href={selectActivitie.facebook}
                  className="border border-[#1877F2] hover:bg-[#1877F2] p-2 rounded-full transition-colors duration-300 group"
                >
                  <IconBrandFacebookFilled className="text-black group-hover:text-white" />
                </Link>
              )}

              {selectActivitie.instagram && (
                <Link
                  href={selectActivitie.instagram}
                  className="border border-[#E4405F] hover:bg-[#E4405F] p-2 rounded-full transition-colors duration-300 group"
                >
                  <IconBrandInstagram className="text-black group-hover:text-white" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
