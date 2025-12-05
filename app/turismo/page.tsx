import { AnimationPage, TabsAnimated } from "@/components";
import { Activities, Trade } from "@/components/Tourism";
import { TABS_ACTIVITIES } from "@/utils/tabsTourism";

export const metadata = {
  title: "Directorio Turístico | Zaragoza, Nuevo León",
  description:
    "Explora los atractivos turísticos, fiestas, eventos y comercios de General Zaragoza, Nuevo León. Descubre cascadas, naturaleza, gastronomía y experiencias únicas en este Pueblo Mágico.",
};

const tabContent: Record<string, React.ReactNode> = {
  "Atractivos turísticos": <Activities categoryId="touristAttractive" />,
  Festividades: <Activities categoryId="party" />,
  Comercios: <Trade />,
};

const PageTourism = () => {
  return (
    <AnimationPage>
      <TabsAnimated
        title="Directorio turístico"
        tabs={TABS_ACTIVITIES}
        content={tabContent}
        queryKey="tab"
      />
    </AnimationPage>
  );
};

export default PageTourism;
