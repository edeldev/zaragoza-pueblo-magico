import { IPagination } from "./types";
import { motion } from "framer-motion";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export const Pagination = ({
  page,
  pagination,
  setPage,
  updateURL,
}: IPagination) => {
  const totalPages = pagination.pageCount;

  const goToPage = (p: number) => {
    setPage(p);
    updateURL(p);
  };

  const handlePrev = () => {
    if (page > 1) goToPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) goToPage(page + 1);
  };

  return (
    <div className="flex justify-center mt-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-3 px-4 py-3 bg-white shadow-sm rounded-xl border border-gray-200"
      >
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition disabled:opacity-40 disabled:hover:bg-transparent"
        >
          <IconChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => goToPage(num)}
              className={`
                min-w-[40px] h-10 flex items-center justify-center rounded-lg text-sm font-medium
                border transition
                ${
                  num === page
                    ? "bg-secondary text-white border-secondary shadow"
                    : "bg-white border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {num}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition disabled:opacity-40 disabled:hover:bg-transparent"
        >
          <IconChevronRight size={18} />
        </button>
      </motion.div>
    </div>
  );
};
