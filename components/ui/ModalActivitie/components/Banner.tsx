import { SocialShareButtons } from "../../SocialSharedButtons";
import { IBanner } from "./types";

export const Banner = ({ selectActivitie }: IBanner) => {
  return (
    <div className="relative h-[400px] lg:h-[300px] overflow-hidden">
      <img
        src={selectActivitie.images[0]}
        alt={selectActivitie.resume}
        className="object-cover z-0 h-full w-full"
      />

      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4), transparent)",
        }}
      />

      <div className="absolute inset-0 z-20 grid grid-cols-1 md:grid-cols-2 text-white container mx-auto px-5 lg:px-0">
        <div className="flex flex-col justify-center gap-5 my-10 lg:my-0">
          <h1 className="text-5xl font-bold capitalize">
            {selectActivitie.name}
          </h1>

          <hr />

          <p>{selectActivitie.resume}</p>
          <SocialShareButtons title={selectActivitie.name} />
        </div>
      </div>
    </div>
  );
};
