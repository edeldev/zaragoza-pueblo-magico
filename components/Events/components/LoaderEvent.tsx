import { SvgLoader } from "@/components/ui";

export const LoaderEvent = () => {
  return (
    <div className="h-[500px] flex flex-col justify-center items-center">
      <SvgLoader />
      <p className="text-center mt-4 text-gray-600">Cargando eventos...</p>
    </div>
  );
};
