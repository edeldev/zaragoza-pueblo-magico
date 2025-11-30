import { SvgLoader } from "@/components/ui";
import { ILoaderComponent } from "./types";

export const LoaderComponent = ({ text }: ILoaderComponent) => {
  return (
    <div className="h-[500px] flex flex-col justify-center items-center">
      <SvgLoader />
      <p className="text-center mt-4 text-gray-600">{text}</p>
    </div>
  );
};
