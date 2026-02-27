import { ABOUT } from "@/utils";
import { Maps } from "./components";
import { Container } from "../ui";

export const About = () => {
  return (
    <Container id="about">
      <div className="grid grid-cols-12 gap-6 p-7 shadow-xl rounded-2xl bg-white">
        <div className="col-span-12 md:col-span-7 space-y-6">
          <header>
            <h2 className="text-3xl font-bold tracking-tight mb-1">
              Conocé Zaragoza
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Descubre información clave sobre nuestro pueblo mágico y sus
              principales características.
            </p>
          </header>

          <ul className="space-y-5">
            {ABOUT.map((item) => (
              <li key={item.id}>
                <article className="space-y-1">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.caption}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <Maps />
      </div>
    </Container>
  );
};
