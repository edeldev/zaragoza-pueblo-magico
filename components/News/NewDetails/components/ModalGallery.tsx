"use client";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react";
import { IModalGallery } from "./types";

export const ModalGallery = ({
  activeImage,
  setShowGallery,
  images,
  setActiveImage,
}: IModalGallery) => {
  const [mainLoaded, setMainLoaded] = useState(false);
  const [thumbLoaded, setThumbLoaded] = useState(false);

  return (
    <div
      className="fixed h-screen overflow-auto inset-0 bg-black/70 backdrop-blur-md z-[999] flex items-center justify-center p-5"
      onClick={() => setShowGallery(false)}
    >
      {(() => {
        const galleryImages = images.slice(1);
        const current = activeImage ?? galleryImages[0];
        const currentIndex = galleryImages.indexOf(current);

        const prevIndex =
          currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
        const nextIndex =
          currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;

        const disableArrows = galleryImages.length <= 1;

        return (
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center px-4">
            <div className="w-full h-120 md:h-150 flex items-center justify-center relative">
              {!mainLoaded && (
                <div className="absolute inset-0 bg-neutral-300 animate-pulse rounded-xl" />
              )}

              <img
                src={current}
                alt="Gallery"
                className={`w-full h-full object-cover rounded-xl shadow-2xl transition-opacity duration-500 ${
                  mainLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setMainLoaded(true)}
              />
            </div>

            <button
              type="button"
              onClick={() => setShowGallery(false)}
              className="absolute top-3 right-8 cursor-pointer transition-all duration-300 text-white text-3xl bg-black/40 hover:bg-black/70 p-2 rounded-full"
            >
              <IconX />
            </button>

            <button
              type="button"
              disabled={disableArrows}
              onClick={(e) => {
                e.stopPropagation();
                if (disableArrows) return;
                setMainLoaded(false);
                setActiveImage(galleryImages[prevIndex]);
              }}
              className={`absolute left-5 top-1/2 -translate-y-1/2 
    flex items-center justify-center
    w-12 h-12 rounded-full transition-all duration-300
    ${
      disableArrows
        ? "bg-white/60 cursor-not-allowed"
        : "bg-white/80 hover:bg-white/60 cursor-pointer"
    }
  `}
            >
              <IconChevronLeft size={28} />
            </button>

            <button
              type="button"
              disabled={disableArrows}
              onClick={(e) => {
                e.stopPropagation();
                if (disableArrows) return;
                setMainLoaded(false);
                setActiveImage(galleryImages[nextIndex]);
              }}
              className={`absolute right-5 top-1/2 -translate-y-1/2 
    flex items-center justify-center
    w-12 h-12 rounded-full transition-all duration-300
    ${
      disableArrows
        ? "bg-white/60 cursor-not-allowed"
        : "bg-white/80 hover:bg-white/60 cursor-pointer"
    }
  `}
            >
              <IconChevronRight size={28} />
            </button>

            <div className="w-full overflow-x-auto p-2 mt-3">
              <div className="flex gap-3 w-max mx-auto">
                {galleryImages.map((img, i) => {
                  return (
                    <div key={i} className="relative">
                      {!thumbLoaded && (
                        <div className="absolute inset-0 bg-neutral-300 animate-pulse rounded-lg h-20 w-32" />
                      )}

                      <img
                        src={img}
                        className={`h-20 w-32 object-cover rounded-lg transition-all
    ${disableArrows ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
    ${
      current === img
        ? "ring-2 ring-white scale-105"
        : "opacity-80 hover:opacity-100"
    } ${thumbLoaded ? "opacity-100" : "opacity-0"}`}
                        onLoad={() => setThumbLoaded(true)}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (disableArrows) return; // 👈 bloquea click
                          setMainLoaded(false);
                          setActiveImage(img);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
