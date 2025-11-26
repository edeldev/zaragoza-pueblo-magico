import { AnimationPage, TabsAnimated } from "@/components";
import { Activities, Trade } from "@/components/Tourism";
import { TABS_ACTIVITIES } from "@/utils/tabsTourism";

const tabContent: Record<string, React.ReactNode> = {
  "Atractivos turísticos": <Activities categoryId="touristAttractive" />,
  "Fiesta y eventos": <Activities categoryId="party" />,
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
