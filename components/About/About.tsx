import { ABOUT } from "@/utils";
import { Maps } from "./components";
import { Container } from "../ui";

export const About = () => {
  return (
    <Container id="about">
      <div className="grid grid-cols-12 gap-5 shadow-xl p-7 rounded-xl">
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
    </Container>
  );
};
