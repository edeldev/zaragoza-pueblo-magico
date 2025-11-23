import { Presentation, Review } from "./components";

export const Mayoress = () => {
  return (
    <section className="bg-black p-10 text-white rounded-2xl shadow-xl w-full">
      <div className="flex justify-center flex-wrap gap-2">
        <Presentation />
      </div>

      <div className="my-16">
        <div className="h-[1px] w-full bg-gradient-to-r from-black via-neutral-700 to-black" />
      </div>

      <Review />
    </section>
  );
};
