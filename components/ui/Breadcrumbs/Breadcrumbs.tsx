import Link from "next/link";
import { IBreadcrumb } from "./types";

export const Breadcrumbs = ({ text, breadcrumb }: IBreadcrumb) => {
  return (
    <>
      <p>
        <Link
          href="/"
          className="hover:text-black/60 transition-colors duration-300"
        >
          Inicio
        </Link>{" "}
        /{" "}
        <Link
          href={`/${text}`}
          className="hover:text-black/60 transition-colors duration-30 capitalize"
        >
          {text}
        </Link>{" "}
        / <span className="text-secondary">{breadcrumb.title}</span>
      </p>
    </>
  );
};
