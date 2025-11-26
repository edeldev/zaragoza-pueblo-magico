import { AnimationPage, TabsAnimated } from "@/components";
import { Council, Dependencies, Mayoress } from "@/components/Government";
import { TABS_GOVERNMENT } from "@/utils";

const tabContent: Record<string, React.ReactNode> = {
  Alcaldesa: <Mayoress />,
  Cabildo: <Council />,
  Dependencias: <Dependencies />,
};

const PageAlcaldesa = () => {
  return (
    <AnimationPage>
      <TabsAnimated
        title="Gobierno municipal de General Zaragoza Nuevo León"
        subtitle="Administración 2024 - 2027"
        tabs={TABS_GOVERNMENT}
        content={tabContent}
        queryKey="tab"
      />
    </AnimationPage>
  );
};

export default PageAlcaldesa;
