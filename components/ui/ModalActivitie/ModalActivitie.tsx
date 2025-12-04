"use client";
import { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconWorld, IconX } from "@tabler/icons-react";
import { Container } from "@/components/ui";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { IModalActivitie } from "./types";
import { Banner, ImagesContent } from "./components";
import Link from "next/link";

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
            <Banner selectActivitie={selectActivitie} />

            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  {selectActivitie.webSite && (
                    <>
                      <div className="flex gap-3 items-center">
                        <Link
                          href={selectActivitie.webSite}
                          className="bg-primary p-2 rounded-full hover:bg-primary/80 transition-colors duration-300"
                        >
                          <IconWorld className="text-white" stroke={1.5} />
                        </Link>
                        <Link
                          href={selectActivitie.webSite}
                          className="text-text-date hover:text-text-date/60 transition-colors duration-300"
                        >
                          Visita su sitio web
                        </Link>
                      </div>
                      <div className="my-6 max-w-2xl mx-auto opacity-70">
                        <div className="h-[1.2px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
                      </div>
                    </>
                  )}
                  <BlocksRenderer
                    content={selectActivitie.description as BlocksContent}
                    blocks={{
                      heading: ({ children, level }) => {
                        const Tag = `h${level}` as keyof JSX.IntrinsicElements;

                        const styles: Record<number, string> = {
                          2: "text-2xl md:text-3xl font-bold text-black",
                          3: "text-lg md:text-xl font-semibold text-gray-800",
                        };

                        return (
                          <Tag
                            className={
                              styles[level] || "text-3xl font-bold text-black"
                            }
                          >
                            {children}
                          </Tag>
                        );
                      },

                      paragraph: ({ children }) => (
                        <p className="text-text-date">{children}</p>
                      ),

                      list: ({ children }) => (
                        <ul className="list-disc pl-3 space-y-3 text-text-date">
                          {children}
                        </ul>
                      ),
                      "list-item": ({ children }) => <li>{children}</li>,
                    }}
                  />
                </div>
                <ImagesContent selectActivitie={selectActivitie} />
              </div>
            </Container>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
