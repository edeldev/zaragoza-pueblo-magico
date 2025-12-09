"use client";
import { useEffect, useState } from "react";
import { getBusinessesBySubcategory } from "@/api/home";
import { TBusines } from "@/interface/business";
import {
  IconBook,
  IconBrandFacebook,
  IconBuildingSkyscraper,
  IconClock,
  IconHanger,
  IconMapPin,
  IconMedicineSyrup,
  IconPerfume,
  IconPhone,
  IconShoppingCart,
  IconWorld,
  IconBrush,
  IconTool,
  IconGasStation,
  IconCake,
  IconToolsKitchen2,
  IconSettingsCog,
} from "@tabler/icons-react";
import Link from "next/link";
import { IBusinessByCommerce } from "./types";
import { SkeletonTrade } from "../SkeletonTrade";

const ICONS: Record<string, React.FC<{ stroke: number; size: number }>> = {
  IconPerfume,
  IconBook,
  IconMedicineSyrup,
  IconHanger,
  IconShoppingCart,
  IconBuildingSkyscraper,
  IconBrush,
  IconTool,
  IconGasStation,
  IconCake,
  IconToolsKitchen2,
  IconSettingsCog,
};

export const BusinessByCommerce = ({
  slug,
  home = false,
}: IBusinessByCommerce) => {
  const [business, setBusiness] = useState<TBusines[] | null>(null);
  const [loading, setLoading] = useState(true);

  const bussinesFetch = home
    ? getBusinessesBySubcategory({ slug, page: 1, pageSize: 1 })
    : getBusinessesBySubcategory({ slug, page: 1, pageSize: 50 });

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const res = await bussinesFetch;
        setBusiness(res.business);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [slug]);

  if (loading) return <SkeletonTrade />;

  if (!business || business.length === 0)
    return (
      <div className="text-center border p-4 rounded-2xl">
        No hay resultados
      </div>
    );

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
                {busines.socialMedia && (
                  <a
                    href={busines.socialMedia}
                    target="_blank"
                    className="flex gap-2 items-center"
                  >
                    <IconBrandFacebook
                      className="text-primary"
                      stroke={1.5}
                      size={20}
                    />
                    <span className="md:text-sm underline">Facebook</span>
                  </a>
                )}
                {busines.web && (
                  <a
                    href={busines.web}
                    target="_blank"
                    className="flex gap-2 items-center w-fit"
                  >
                    <IconWorld
                      className="text-primary"
                      stroke={1.5}
                      size={20}
                    />
                    <span className="md:text-sm underline">Sitio web</span>
                  </a>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-2">
              <Link
                href={busines.ubicationMap}
                className="px-3 py-1 border border-primary text-black rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Visitar
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
