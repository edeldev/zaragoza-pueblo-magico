import { AnimationPage, ContainerPages, Events } from "@/components";

export const metadata = {
  title: "Eventos | Zaragoza, Nuevo León",
  description:
    "Descubre los próximos eventos en General Zaragoza, Nuevo León: festividades, actividades culturales, eventos turísticos y celebraciones comunitarias.",
};

const PageEvents = () => {
  return (
    <AnimationPage>
      <ContainerPages>
        <Events />
      </ContainerPages>
    </AnimationPage>
  );
};

export default PageEvents;
