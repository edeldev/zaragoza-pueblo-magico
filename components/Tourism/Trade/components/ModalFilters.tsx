"use client";
import { BUSINESS } from "@/utils";
import { IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { IModalFilter } from "./types";

export const ModalFilters = ({
  selectBusinesSlug,
  setSelectBusinesSlug,
  isModalOpen,
  setIsModalOpen,
}: IModalFilter) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-99 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-5 w-full max-w-md max-h-[80vh] overflow-y-auto relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              <IconX size={24} />
            </button>
            <h2 className="text-lg font-semibold mb-4">
              Selecciona una categoría
            </h2>
            <ul className="space-y-2">
              {BUSINESS.map((busines) => {
                const isSelect = selectBusinesSlug === busines.id;
                return (
                  <li
                    key={busines.id}
                    onClick={() => {
                      setSelectBusinesSlug(busines.id);
                      setIsModalOpen(false);
                    }}
                    className={`capitalize cursor-pointer px-4 py-2 rounded ${
                      isSelect
                        ? "bg-pink-100 text-pink-600 font-semibold"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {busines.label}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
