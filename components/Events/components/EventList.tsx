import { EventMainItem } from "./EventMainItem";
import { EventSmallItem } from "./EventSmallItem";
import { IEventList } from "./types";
import { LoaderComponent, NotResults } from "@/components/ui";

export const EventList = ({ event, loading }: IEventList) => {
  if (loading) return <LoaderComponent text="Cargando eventos..." />;

  if (!loading && event.length === 0)
    return (
      <NotResults
        text="No hay eventos disponibles"
        caption=" Actualmente no hay eventos programados. Vuelve pronto para ver nuevas
        actividades y sorpresas."
      />
    );

  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 max-w-6xl mx-auto">
      <EventMainItem event={event[0]} />

      <div className="flex flex-col gap-6">
        {event.slice(1).map((ev) => (
          <EventSmallItem key={ev.slug} event={ev} />
        ))}
      </div>
    </section>
  );
};
