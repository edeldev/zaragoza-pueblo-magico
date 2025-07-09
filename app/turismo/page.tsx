import { TabsAnimated } from "@/components";
import { Activities, Trade } from "@/components/Tourism";
import { TABS_ACTIVITIES } from "@/utils/tabsTourism";

const tabContent: Record<string, React.ReactNode> = {
  "Atractivos turísticos": <Activities categoryId="touristAttractive" />,
  "Fiesta y eventos": <Activities categoryId="party" />,
  "Hoteles y restaurantes": <Activities categoryId="hotels" />,
  Comercios: <Trade />,
};

const PageTourism = () => {
  return (
    <TabsAnimated
      title="Directorio turístico"
      tabs={TABS_ACTIVITIES}
      content={tabContent}
      queryKey="tab"
    />
  );
};

export default PageTourism;
