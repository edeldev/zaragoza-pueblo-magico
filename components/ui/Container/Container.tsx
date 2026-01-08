import { IContainer } from "./types";

export const Container = ({ children, id }: IContainer) => {
  return (
    <section id={id} className="bg-white z-80 relative py-10 scroll-mt-24">
      <div className="container mx-auto px-5 lg:px-0">{children}</div>
    </section>
  );
};
