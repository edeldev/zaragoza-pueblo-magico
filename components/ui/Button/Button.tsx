import Link from "next/link";
import { IButton } from "./types";

export const Button = ({ children, href, className }: IButton) => {
  return (
    <Link href={href} className={`px-3 py-1 ${className}`}>
      {children}
    </Link>
  );
};
