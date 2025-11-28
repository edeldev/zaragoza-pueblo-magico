import { IconChevronRight } from "@tabler/icons-react";

export const NoEvents = () => {
  return (
    <div className="h-[400px] flex flex-col justify-center items-center text-center px-4">
      <div className="w-20 h-20 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
        <IconChevronRight className="text-pink-500 rotate-90" size={40} />
      </div>

      <h2 className="text-2xl font-semibold">No hay eventos disponibles</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Actualmente no hay eventos programados. Vuelve pronto para ver nuevas
        actividades y sorpresas.
      </p>
    </div>
  );
};
