import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

export const ReadMore = ({ slug }: { slug: string }) => (
  <Link
    href={`/eventos/${slug}`}
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
