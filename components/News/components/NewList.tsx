import { NewMainItem } from "./NewMainItem";
import { NewSmallItem } from "./NewSmallItem";
import { INewList } from "./types";
import { LoaderComponent, NotResults } from "@/components/ui";

export const NewList = ({ newList, loading }: INewList) => {
  if (loading) return <LoaderComponent text="Cargando noticias..." />;

  if (!loading && newList.length === 0)
    return (
      <NotResults
        text="No hay noticias disponibles"
        caption=" Actualmente no hay noticias programadas. Vuelve pronto para ver nuevas
        actividades y sorpresas."
      />
    );

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-6xl mx-auto">
      <NewMainItem newItem={newList[0]} />

      <div className="flex flex-col gap-6">
        {newList.slice(1).map((n) => (
          <NewSmallItem key={n.slug} newItem={n} />
        ))}
      </div>
    </section>
  );
};
