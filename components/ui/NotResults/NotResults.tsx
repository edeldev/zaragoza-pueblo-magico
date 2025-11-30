import { IconChevronRight } from "@tabler/icons-react";
import { INotResults } from "./types";

export const NotResults = ({ text, caption }: INotResults) => {
  return (
    <div className="h-[400px] flex flex-col justify-center items-center text-center px-4">
      <div className="w-20 h-20 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
        <IconChevronRight className="text-pink-500 rotate-90" size={40} />
      </div>

      <h2 className="text-2xl font-semibold">{text}</h2>
      <p className="text-gray-600 mt-2 max-w-md">{caption}</p>
    </div>
  );
};
