import { AnimationPage, TabsAnimated } from "@/components";
import { Council, Dependencies, Mayoress } from "@/components/Government";
import { TABS_GOVERNMENT } from "@/utils";

export const metadata = {
  title: "Gobierno Municipal de General Zaragoza, Nuevo León",
  description:
    "Conoce a la alcaldesa, el cabildo y las dependencias del Gobierno Municipal de General Zaragoza, Nuevo León. Administración 2024 - 2027.",
};

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
