"use client";

import { usePathname } from "next/navigation";
import { HeaderHome, HeaderPages } from "./components";

export const Header = () => {
  const pathname = usePathname();

  return <>{pathname === "/" ? <HeaderHome /> : <HeaderPages />}</>;
};
