"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { Container, SocialShareButtons } from "@/components/ui";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { IModalActivitie } from "./types";

export const ModalActivitie = ({
  selectActivitie,
  close,
  isOpen,
}: IModalActivitie) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-99 backdrop-blur-sm bg-black/30 pt-22"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="fixed right-5 top-5 bg-gray-50 rounded-md p-1 cursor-pointer z-30 hover:bg-gray-300 transition-colors duration-300"
            onClick={close}
          >
            <IconX />
          </div>
          <motion.div
            className="bg-white text-black w-full h-full rounded-2xl shadow-lg overflow-y-auto"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative h-[400px] lg:h-[300px] overflow-hidden">
              <img
                src={selectActivitie.images[0]}
                alt={selectActivitie.resume}
                className="object-cover z-0 h-full w-full"
              />

              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4), transparent)",
                }}
              />

              <div className="absolute inset-0 z-20 grid grid-cols-1 md:grid-cols-2 text-white container mx-auto px-5 lg:px-0">
                <div className="flex flex-col justify-center gap-5 my-10 lg:my-0">
                  <h1 className="text-5xl font-bold capitalize">
                    {selectActivitie.name}
                  </h1>

                  <hr />

                  <p>{selectActivitie.resume}</p>
                  <SocialShareButtons title={selectActivitie.name} />
                </div>
              </div>
            </div>

            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  <BlocksRenderer
                    content={selectActivitie.description as BlocksContent}
                    blocks={{
                      paragraph: ({ children }) => (
                        <p className="text-secondary">{children}</p>
                      ),
                    }}
                  />
                </div>
                <div>
                  {selectActivitie.images.map((img) => (
                    <img
                      key={selectActivitie.slug}
                      src={img}
                      alt={selectActivitie.resume}
                      width={500}
                      height={500}
                      className="w-full md:min-h-[500px] h-fit object-cover"
                    />
                  ))}

                  <div className="space-y-1 mt-4">
                    <p className="text-lg font-semibold">Ubicación</p>
                    <span>{selectActivitie.ubication}</span>
                    <div className="flex justify-end">
                      <Link
                        href={selectActivitie.locationHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-1 bg-primary rounded-md text-white"
                      >
                        Ver en el mapa
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
