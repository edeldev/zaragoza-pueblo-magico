import Link from "next/link";
import { IEventDetail } from "./types";

export const Breadcrumbs = ({ eventId }: IEventDetail) => {
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
          href="/eventos"
          className="hover:text-black/60 transition-colors duration-300"
        >
          Eventos
        </Link>{" "}
        / <span className="text-secondary">{eventId.title}</span>
      </p>
    </>
  );
};
