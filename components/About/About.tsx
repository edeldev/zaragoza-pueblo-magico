import { ABOUT } from "@/utils";
import { Maps } from "./components";

export const About = () => {
  return (
    <section
      id="section-features"
      className="bg-white z-80 relative py-15 scroll-mt-46"
    >
      <div className="container mx-auto px-5 md:px-0">
        <div className="grid grid-cols-12 gap-5 shadow-2xl p-7 rounded-xl">
          <ul className="col-span-12 md:col-span-7 space-y-5">
            {ABOUT.map((about) => (
              <li key={about.id}>
                <h3 className="font-bold text-2xl">{about.title}</h3>
                <p>{about.caption}</p>
              </li>
            ))}
          </ul>
          <Maps />
        </div>
      </div>
    </section>
  );
};
