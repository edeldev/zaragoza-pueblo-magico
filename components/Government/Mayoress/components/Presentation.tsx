import { Fragment } from "react";
import Link from "next/link";
import { IconStar, IconSchool, IconAward, IconUser } from "@tabler/icons-react";

export const Presentation = () => {
  return (
    <Fragment>
      <img
        src="/judith.webp"
        alt="Imagen de la alcaldesa de General Zaragoza Nuevo León"
        className="object-contain w-full max-w-xs h-[400px] md:h-[500px] mask-fade aspect-square"
      />
      <div className="space-y-4 max-w-sm">
        <div>
          <h2 className="text-4xl font-bold">
            Hola, soy la{" "}
            <span className="text-text-orange block">
              Lic. Judith Amaranta Ibarra Rodríguez
            </span>
          </h2>

          <span className="text-gray-300 block text-lg">
            Alcaldesa de General Zaragoza, Nuevo León
          </span>
        </div>

        <Link
          href="/eventos"
          className="inline-block bg-text-orange text-black font-semibold px-5 py-2 rounded-lg hover:bg-text-orange/80 transition-all w-fit"
        >
          Ver próximos eventos
        </Link>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-3 items-center">
            <IconStar className="text-text-orange" size={24} stroke={1.5} />
            <span>Primera mujer alcaldesa de Zaragoza</span>
          </div>

          <div className="flex gap-3 items-center">
            <IconSchool className="text-text-orange" size={24} stroke={1.5} />
            <span>Licenciada en Educación</span>
          </div>

          <div className="flex gap-3 items-center">
            <IconAward className="text-text-orange" size={24} stroke={1.5} />
            <span>Segunda alcaldesa más joven de Nuevo León</span>
          </div>

          <div className="flex gap-3 items-center">
            <IconUser className="text-text-orange" size={24} stroke={1.5} />
            <span>Liderazgo joven y compromiso social</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
