"use client";
import { useState } from "react";
import { BUSINESS } from "@/utils";
import { IconMenu2 } from "@tabler/icons-react";
import { CategoryFilters, ModalFilters, ResultBusiness } from "./components";
import { useLockBodyScroll } from "@/hooks";

export const Trade = () => {
  const [selectBusinesSlug, setSelectBusinesSlug] = useState<string>(
    BUSINESS[0].id
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLockBodyScroll(isModalOpen);

  return (
    <>
      <ModalFilters
        selectBusinesSlug={selectBusinesSlug}
        setSelectBusinesSlug={setSelectBusinesSlug}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div className="grid grid-cols-12">
        <div
          onClick={() => setIsModalOpen(true)}
          className="col-span-12 md:hidden cursor-pointer flex justify-between items-center mb-4 px-4 py-2 bg-gray-100 border rounded"
        >
          <span className="font-semibold text-gray-700 capitalize">
            {BUSINESS.find((b) => b.id === selectBusinesSlug)?.label}
          </span>
          <button>
            <IconMenu2 size={24} />
          </button>
        </div>

        <CategoryFilters
          selectBusinesSlug={selectBusinesSlug}
          setSelectBusinesSlug={setSelectBusinesSlug}
        />

        <ResultBusiness selectBusinesSlug={selectBusinesSlug} />
      </div>
    </>
  );
};
