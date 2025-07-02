import { IconCarFanFilled } from "@tabler/icons-react";

export const Main = () => {
  return (
    <div className="min-h-[300dvh] mt-[110px] md:mt-[130px]">
      <div className="w-full min-h-[calc(100dvh-130px)] flex items-center">
        <div className="grid grid-cols-12 container mx-auto px-5 md:px-0">
          <div
            id="hero-main"
            className="col-span-12 md:col-span-6 space-y-5 text-white shadow-md bg-black/20 backdrop-blur-md rounded-xl p-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold">General Zaragoza</h1>
            <h2>
              Entre las imponentes montañas de Nuevo León, se encuentra este
              Pueblo Mágico con tesoros naturales, el destino perfecto para el
              ecoturismo y la aventura.
            </h2>
            <div className="flex items-center gap-3">
              <IconCarFanFilled size={20} />
              <div className="flex flex-col">
                <span className="text-sm font-bold">Clima Actual</span>
                <span className="text-xs">Lluvia muy fuerte</span>
              </div>

              <span>|</span>
              <span className="font-bold text-xl">23°</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6" />
        </div>
      </div>
    </div>
  );
};
