"use client";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { Container } from "@/components/ui";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { IModalActivitie } from "./types";
import { Banner, ImagesContent } from "./components";

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
                  <BlocksRenderer
                    content={selectActivitie.description as BlocksContent}
                    blocks={{
                      paragraph: ({ children }) => (
                        <p className="text-text-date">{children}</p>
                      ),
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
