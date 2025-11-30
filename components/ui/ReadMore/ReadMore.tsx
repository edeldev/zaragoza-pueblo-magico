import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import { IReadMore } from "./types";

export const ReadMore = ({ page, slug }: IReadMore) => (
  <Link
    href={`/${page}/${slug}`}
    className="text-blue-600 flex items-center gap-1 group w-fit font-medium"
  >
    Leer más
    <IconChevronRight
      size={18}
      stroke={2}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
);
