import { AnimationPage, ContainerPages, News } from "@/components";

export const metadata = {
  title: "Noticias | Zaragoza, Nuevo León",
  description:
    "Consulta las noticias más recientes de General Zaragoza, Nuevo León. Información oficial, comunicados municipales y actualizaciones importantes para la comunidad.",
};

const PageNews = () => {
  return (
    <AnimationPage>
      <ContainerPages>
        <News />
      </ContainerPages>
    </AnimationPage>
  );
};

export default PageNews;
