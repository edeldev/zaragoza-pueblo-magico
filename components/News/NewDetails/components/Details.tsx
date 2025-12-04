"use client";
import { JSX, useState } from "react";
import { formatDate } from "@/utils";
import { IDetail } from "./types";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useLockBodyScroll } from "@/hooks";
import { ModalGallery } from "./ModalGallery";

export const Details = ({ newId }: IDetail) => {
  const { title, date, content, contentTwo, imageUrl, video } = newId;

  const [isLoadingVideo, setIsLoadingVideo] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loaded, setLoaded] = useState<boolean>(false);

  const [showGallery, setShowGallery] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = imageUrl || [];

  const openGallery = (img: string) => {
    setActiveImage(img);
    setShowGallery(true);
  };

  useLockBodyScroll(showGallery);

  return (
    <>
      <section className="space-y-10">
        <div className="space-y-2">
          <div className="flex justify-end">
            <span className="text-neutral-500 text-sm font-medium tracking-wide uppercase">
              {formatDate(date)}
            </span>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            {!isLoaded && (
              <div className="w-full h-96 md:h-[520px] bg-neutral-200 animate-pulse absolute inset-0 rounded-3xl" />
            )}

            <img
              src={images[0]}
              alt={title}
              className={`w-full h-96 md:h-[520px] object-cover transition-all duration-700 hover:scale-[1.03] ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
          <BlocksRenderer
            content={content as BlocksContent}
            blocks={{
              heading: ({ children, level }) => {
                const Tag = `h${level}` as keyof JSX.IntrinsicElements;

                const styles: Record<number, string> = {
                  3: "text-lg md:text-xl font-semibold text-gray-800 mb-2",
                };

                return (
                  <Tag
                    className={styles[level] || "text-xl font-bold text-black"}
                  >
                    {children}
                  </Tag>
                );
              },

              paragraph: ({ children }) => (
                <p className="mb-5 text-neutral-700 text-lg">{children}</p>
              ),

              list: ({ children }) => (
                <ul className="list-disc pl-3 space-y-3">{children}</ul>
              ),
              "list-item": ({ children }) => (
                <li className="text-neutral-700 text-lg">{children}</li>
              ),
            }}
          />
        </div>

        {images.length > 1 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.slice(1, 4).map((img, index) => {
              const isThird = index === 2 && images.length > 3;

              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
                  onClick={() => openGallery(img)}
                >
                  {!loaded && (
                    <div className="w-full h-72 bg-neutral-200 animate-pulse absolute inset-0 rounded-2xl" />
                  )}

                  <img
                    src={img}
                    alt={title}
                    className={`w-full h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 ${
                      loaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setLoaded(true)}
                  />

                  {isThird && (
                    <div
                      onClick={() => setShowGallery(true)}
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-lg font-semibold rounded-2xl opacity-100"
                    >
                      Ver más fotos
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="prose prose-lg max-w-none text-neutral-700 leading-relaxed">
          <BlocksRenderer
            content={contentTwo as BlocksContent}
            blocks={{
              heading: ({ children, level }) => {
                const Tag = `h${level}` as keyof JSX.IntrinsicElements;

                const styles: Record<number, string> = {
                  3: "text-lg md:text-xl font-semibold text-gray-800 mb-2",
                };

                return (
                  <Tag
                    className={styles[level] || "text-xl font-bold text-black"}
                  >
                    {children}
                  </Tag>
                );
              },

              paragraph: ({ children }) => (
                <p className="mb-5 text-neutral-700 text-lg">{children}</p>
              ),

              list: ({ children }) => (
                <ul className="list-disc pl-3 space-y-3">{children}</ul>
              ),
              "list-item": ({ children }) => (
                <li className="text-neutral-700 text-lg">{children}</li>
              ),
            }}
          />
        </div>

        {video && (
          <div className="w-full h-auto aspect-video rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative">
            {isLoadingVideo && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-10">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}

            <iframe
              src={video}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              className={`w-full h-full rounded-3xl transition-opacity duration-500 ${
                isLoadingVideo ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setIsLoadingVideo(false)}
            />
          </div>
        )}
      </section>

      {showGallery && (
        <ModalGallery
          activeImage={activeImage}
          setShowGallery={setShowGallery}
          images={images}
          setActiveImage={setActiveImage}
        />
      )}
    </>
  );
};
