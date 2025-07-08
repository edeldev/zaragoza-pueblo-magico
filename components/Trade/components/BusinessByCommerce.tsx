"use client";
import { useEffect, useState } from "react";
import { getBusinessesBySubcategory } from "@/api/home";
import { TBusines } from "@/interface/business";
import { IBusinessByCommerce } from "./types";
import {
  IconBook,
  IconClock,
  IconHanger,
  IconMapPin,
  IconMedicineSyrup,
  IconPerfume,
  IconPhone,
  IconShoppingCart,
} from "@tabler/icons-react";
import Link from "next/link";

const ICONS: Record<string, React.FC<{ stroke: number; size: number }>> = {
  IconPerfume,
  IconBook,
  IconMedicineSyrup,
  IconHanger,
  IconShoppingCart,
};

export const BusinessByCommerce = ({ slug }: IBusinessByCommerce) => {
  const [business, setBusiness] = useState<TBusines[] | null>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const res = await getBusinessesBySubcategory({ slug });
        setBusiness(res.business);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error(err);
        }
      }
    };

    fetchBusiness();
  }, [slug]);

  if (!business || business.length === 0) return null;

  return (
    <>
      {business.map((busines) => {
        const Icon = ICONS[busines.icon];
        return (
          <div
            key={busines.slug}
            className="shadow-lg p-4 rounded-2xl h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="uppercase text-sm text-gray-500">
                  {busines.nameCommerce}
                </h4>
                <Icon stroke={1} size={20} />
              </div>

              <h2 className="font-semibold text-xl capitalize">
                {busines.name}
              </h2>

              <div className="space-y-2 mt-4">
                <div className="flex gap-2 items-center">
                  <IconClock className="text-primary" stroke={1.5} size={20} />
                  <span className="md:text-sm">{busines.schedule}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <IconMapPin className="text-primary" stroke={1.5} size={20} />
                  <span className="md:text-sm">{busines.ubication}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <IconPhone className="text-primary" stroke={1.5} size={20} />
                  <span className="md:text-sm">{busines.phone}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-2">
              <Link
                href={busines.ubicationMap}
                className="px-3 py-1 border border-primary text-black rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Ver mapa
              </Link>
              <a
                href={`tel:${busines.phone}`}
                className="px-3 py-1 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-300"
              >
                Llamar
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};
